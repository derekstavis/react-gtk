

/**
 * PangoFT2 1.0
 *
 * Generated from 1.0
 */
import * as PangoFc from "pangofc";
import * as freetype2 from "freetype2";
import * as Pango from "pango";
import * as fontconfig from "fontconfig";
import * as GObject from "gobject";

export function font_get_coverage(font: Pango.Font, language: Pango.Language): Pango.Coverage;

export function font_get_kerning(font: Pango.Font, left: Pango.Glyph, right: Pango.Glyph): number;

export function get_unknown_glyph(font: Pango.Font): Pango.Glyph;

export function render(bitmap: freetype2.Bitmap, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;

export function render_layout(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void;

export function render_layout_line(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void;

export function render_layout_line_subpixel(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void;

export function render_layout_subpixel(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void;

export function render_transformed(bitmap: freetype2.Bitmap, matrix: Pango.Matrix | null, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;

export function shutdown_display(): void;

export type SubstituteFunc = (pattern: fontconfig.Pattern, data?: any | null) => void;
export module FontMap {
    export interface ConstructorProperties extends PangoFc.FontMap.ConstructorProperties {
        [key: string]: any;
    }
}
export class FontMap extends PangoFc.FontMap {
    static $gtype: GObject.GType<FontMap>;
    constructor(properties?: Partial<FontMap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontMap.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): FontMap;
    // Members
    set_default_substitute(func: SubstituteFunc): void;
    set_default_substitute(...args: never[]): never;
    set_resolution(dpi_x: number, dpi_y: number): void;
    substitute_changed(): void;
}