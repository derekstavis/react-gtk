

/**
 * PangoFc 1.0
 *
 * Generated from 1.0
 */
import * as Pango from "pango";
import * as fontconfig from "fontconfig";
import * as GObject from "gobject";

export const FONT_FEATURES: string;

export const FONT_VARIATIONS: string;

export const GRAVITY: string;

export const PRGNAME: string;

export const VERSION: string;

export type SubstituteFunc = (pattern: fontconfig.Pattern, data?: any | null) => void;
export module Decoder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Decoder extends GObject.Object {
    static $gtype: GObject.GType<Decoder>;
    constructor(properties?: Partial<Decoder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Decoder.ConstructorProperties>, ...args: any[]): void;
    // Members
    get_charset(fcfont: Font): fontconfig.CharSet;
    get_glyph(fcfont: Font, wc: number): Pango.Glyph;
    vfunc_get_charset(fcfont: Font): fontconfig.CharSet;
    vfunc_get_glyph(fcfont: Font, wc: number): Pango.Glyph;
}
export module Font {
    export interface ConstructorProperties extends Pango.Font.ConstructorProperties {
        [key: string]: any;
        fontmap: FontMap;
        pattern: any;
    }
}
export abstract class Font extends Pango.Font {
    static $gtype: GObject.GType<Font>;
    constructor(properties?: Partial<Font.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Font.ConstructorProperties>, ...args: any[]): void;
    // Properties
    fontmap: FontMap;
    pattern: any;
    // Fields
    font_pattern: fontconfig.Pattern;
    priv: any;
    matrix: Pango.Matrix;
    description: Pango.FontDescription;
    metrics_by_lang: any[];
    is_hinted: number;
    is_transformed: number;
    // Members
    get_glyph(wc: number): number;
    get_languages(): Pango.Language | null;
    get_unknown_glyph(wc: number): Pango.Glyph;
    has_char(wc: number): boolean;
    kern_glyphs(glyphs: Pango.GlyphString): void;
    unlock_face(): void;
    static description_from_pattern(pattern: fontconfig.Pattern, include_size: boolean): Pango.FontDescription;
}
export module FontMap {
    export interface ConstructorProperties extends Pango.FontMap.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class FontMap extends Pango.FontMap {
    static $gtype: GObject.GType<FontMap>;
    constructor(properties?: Partial<FontMap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontMap.ConstructorProperties>, ...args: any[]): void;
    // Members
    cache_clear(): void;
    config_changed(): void;
    create_context(): Pango.Context;
    find_decoder(pattern: fontconfig.Pattern): Decoder | null;
    set_default_substitute(func: SubstituteFunc): void;
    shutdown(): void;
    substitute_changed(): void;
}
export class FontMapPrivate {
    static $gtype: GObject.GType<FontMapPrivate>;
    constructor(copy: FontMapPrivate);
}