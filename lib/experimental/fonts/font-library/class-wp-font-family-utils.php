<?php
/**
 * Fonts Family Utils class.
 *
 * This file contains utils fot Font Family class.
 *
 * @package    WordPress
 * @subpackage Font Library
 * @since      6.5.0
 */

if ( class_exists( 'WP_Font_Family_Utils' ) ) {
	return;
}

/**
 * A class of utilities for working with the Font Library.
 *
 * @since 6.5.0
 */
class WP_Font_Family_Utils {

	/**
	 * Generates a filename for a font face asset.
	 *
	 * Creates a filename for a font face asset using font family, style, weight and
	 * extension information.
	 *
	 * @since 6.5.0
	 *
	 * @param string $font_slug The font slug to use in the filename.
	 * @param array  $font_face The font face array containing 'fontFamily', 'fontStyle', and
	 *                          'fontWeight' attributes.
	 * @param string $url       The URL of the font face asset, used to derive the file extension.
	 * @param string $suffix    Optional. The suffix added to the resulting filename. Default empty string.
	 * @return string The generated filename for the font face asset.
	 */
	public static function get_filename_from_font_face( $font_slug, $font_face, $url, $suffix = '' ) {
		$extension = pathinfo( $url, PATHINFO_EXTENSION );
		$filename  = "{$font_slug}_{$font_face['fontStyle']}_{$font_face['fontWeight']}";
		if ( '' !== $suffix ) {
			$filename .= "_{$suffix}";
		}

		return sanitize_file_name( "{$filename}.{$extension}" );
	}

	/**
	 * Merges two fonts and their font faces.
	 *
	 * @since 6.5.0
	 *
	 * @param array $font1 The first font to merge.
	 * @param array $font2 The second font to merge.
	 * @return array|WP_Error The merged font or WP_Error if the fonts have different slugs.
	 */
	public static function merge_fonts_data( $font1, $font2 ) {
		if ( $font1['slug'] !== $font2['slug'] ) {
			return new WP_Error(
				'fonts_must_have_same_slug',
				__( 'Fonts must have the same slug to be merged.', 'gutenberg' )
			);
		}

		$font_faces_1      = isset( $font1['fontFace'] ) ? $font1['fontFace'] : array();
		$font_faces_2      = isset( $font2['fontFace'] ) ? $font2['fontFace'] : array();
		$merged_font_faces = array_merge( $font_faces_1, $font_faces_2 );

		$serialized_faces        = array_map( 'serialize', $merged_font_faces );
		$unique_serialized_faces = array_unique( $serialized_faces );
		$unique_faces            = array_map( 'unserialize', $unique_serialized_faces );

		$merged_font             = array_merge( $font1, $font2 );
		$merged_font['fontFace'] = array_values( $unique_faces );

		return $merged_font;
	}

	/**
	 * Returns whether the given file has a font MIME type.
	 *
	 * @since 6.5.0
	 *
	 * @param string $filepath The file to check.
	 * @return bool True if the file has a font MIME type, false otherwise.
	 */
	public static function has_font_mime_type( $filepath ) {
		$allowed_mime_types = WP_Font_Library::get_expected_font_mime_types_per_php_version();
		$filetype           = wp_check_filetype( $filepath, $allowed_mime_types );

		return in_array( $filetype['type'], $allowed_mime_types, true );
	}

	/**
	 * Format font family to make it valid CSS.
	 *
	 * @since 6.5.0
	 *
	 * @param string $font_family Font family attribute.
	 * @return string The formatted font family attribute.
	 */
	public static function format_font_family( $font_family ) {
		if ( $font_family ) {
			$font_families         = explode( ',', $font_family );
			$wrapped_font_families = array_map(
				function ( $family ) {
					$trimmed = trim( $family );
					if ( ! empty( $trimmed ) && strpos( $trimmed, ' ' ) !== false && strpos( $trimmed, "'" ) === false && strpos( $trimmed, '"' ) === false ) {
							return "'" . $trimmed . "'";
					}
					return $trimmed;
				},
				$font_families
			);

			if ( count( $wrapped_font_families ) === 1 ) {
				$font_family = $wrapped_font_families[0];
			} else {
				$font_family = implode( ', ', $wrapped_font_families );
			}
		}

		return $font_family;
	}

	/**
	 * Sanitizes the font family data using WP_Theme_JSON.
	 *
	 * @since 6.5.0
	 *
	 * @return array A sanitized font family definition.
	 */
	public static function sanitize() {
		// Creates the structure of theme.json array with the new fonts.
		$fonts_json = array(
			'version'  => '2',
			'settings' => array(
				'typography' => array(
					'fontFamilies' => array(
						'custom' => array(
							$this->data,
						),
					),
				),
			),
		);

		// Creates a new WP_Theme_JSON object with the new fonts to
		// leverage sanitization and validation.
		$fonts_json     = WP_Theme_JSON_Gutenberg::remove_insecure_properties( $fonts_json );
		$theme_json     = new WP_Theme_JSON_Gutenberg( $fonts_json );
		$theme_data     = $theme_json->get_data();
		$sanitized_font = ! empty( $theme_data['settings']['typography']['fontFamilies'] )
			? $theme_data['settings']['typography']['fontFamilies'][0]
			: array();

		$sanitized_font['slug']       = _wp_to_kebab_case( $sanitized_font['slug'] );
		$sanitized_font['fontFamily'] = WP_Font_Family_Utils::format_font_family( $sanitized_font['fontFamily'] );
		$this->data                   = $sanitized_font;
		return $this->data;
	}
}
