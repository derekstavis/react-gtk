

/**
 * Rsvg 2.0
 *
 * Generated from 2.50.2
 */
import * as GLib from "glib";
import * as GObject from "gobject";
import * as GdkPixbuf from "gdkpixbuf";
import * as Gio from "gio";
import * as cairo from "cairo";

export const MAJOR_VERSION: number;

export const MICRO_VERSION: number;

export const MINOR_VERSION: number;

export const VERSION: string;

export function cleanup(): void;

export function error_quark(): GLib.Quark;

export function set_default_dpi(dpi: number): void;

export function set_default_dpi_x_y(dpi_x: number, dpi_y: number): void;
export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;
    constructor(options: { message: string, code: number});
    constructor(copy: Error);
    // Properties
    static FAILED: number;
    // Members
    static quark(): GLib.Quark;
}
export namespace Unit {
    export const $gtype: GObject.GType<Unit>;
}
export enum Unit {
    PERCENT = 0,
    PX = 1,
    EM = 2,
    EX = 3,
    IN = 4,
    CM = 5,
    MM = 6,
    PT = 7,
    PC = 8,
}
export namespace HandleFlags {
    export const $gtype: GObject.GType<HandleFlags>;
}
export enum HandleFlags {
    FLAGS_NONE = 0,
    FLAG_UNLIMITED = 1,
    FLAG_KEEP_IMAGE_DATA = 2,
}
export module Handle {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        base_uri: string;
        desc: string;
        dpi_x: number;
        dpi_y: number;
        em: number;
        ex: number;
        flags: HandleFlags;
        height: number;
        metadata: string;
        title: string;
        width: number;
    }
}
export class Handle extends GObject.Object {
    static $gtype: GObject.GType<Handle>;
    constructor(properties?: Partial<Handle.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Handle.ConstructorProperties>, ...args: any[]): void;
    // Properties
    base_uri: string;
    desc: string;
    dpi_x: number;
    dpi_y: number;
    em: number;
    ex: number;
    flags: HandleFlags;
    height: number;
    metadata: string;
    title: string;
    width: number;
    // Constructors
    static ["new"](): Handle;
    static new_from_data(data: Uint8Array | string): Handle;
    static new_from_file(filename: string): Handle;
    static new_from_gfile_sync(file: Gio.File, flags: HandleFlags, cancellable?: Gio.Cancellable | null): Handle;
    static new_from_stream_sync(input_stream: Gio.InputStream, base_file: Gio.File | null, flags: HandleFlags, cancellable?: Gio.Cancellable | null): Handle;
    static new_with_flags(flags: HandleFlags): Handle;
    // Members
    close(): boolean;
    get_base_uri(): string;
    get_dimensions(): DimensionData;
    get_dimensions_sub(id?: string | null): [boolean, DimensionData];
    get_geometry_for_element(id?: string | null): [boolean, Rectangle | null, Rectangle | null];
    get_geometry_for_layer(id: string | null, viewport: Rectangle): [boolean, Rectangle | null, Rectangle | null];
    get_intrinsic_dimensions(): [boolean | null, Length | null, boolean | null, Length | null, boolean | null, Rectangle | null];
    get_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_pixbuf_sub(id?: string | null): GdkPixbuf.Pixbuf | null;
    get_position_sub(id?: string | null): [boolean, PositionData];
    has_sub(id: string): boolean;
    internal_set_testing(testing: boolean): void;
    read_stream_sync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean;
    render_cairo(cr: cairo.Context): boolean;
    render_cairo_sub(cr: cairo.Context, id?: string | null): boolean;
    render_document(cr: cairo.Context, viewport: Rectangle): boolean;
    render_element(cr: cairo.Context, id: string | null, element_viewport: Rectangle): boolean;
    render_layer(cr: cairo.Context, id: string | null, viewport: Rectangle): boolean;
    set_base_gfile(base_file: Gio.File): void;
    set_base_uri(base_uri: string): void;
    set_dpi(dpi: number): void;
    set_dpi_x_y(dpi_x: number, dpi_y: number): void;
    set_stylesheet(css: Uint8Array | string): boolean;
    write(buf: Uint8Array | string): boolean;
}
export class DimensionData {
    static $gtype: GObject.GType<DimensionData>;
    constructor(properties?: Partial<{
        width?: number;
        height?: number;
        em?: number;
        ex?: number;
    }>);
    constructor(copy: DimensionData);
    // Fields
    width: number;
    height: number;
    em: number;
    ex: number;
}
export class Length {
    static $gtype: GObject.GType<Length>;
    constructor(copy: Length);
    // Fields
    length: number;
    unit: Unit;
}
export class PositionData {
    static $gtype: GObject.GType<PositionData>;
    constructor(properties?: Partial<{
        x?: number;
        y?: number;
    }>);
    constructor(copy: PositionData);
    // Fields
    x: number;
    y: number;
}
export class Rectangle {
    static $gtype: GObject.GType<Rectangle>;
    constructor(properties?: Partial<{
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    }>);
    constructor(copy: Rectangle);
    // Fields
    x: number;
    y: number;
    width: number;
    height: number;
}