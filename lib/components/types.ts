import Gtk from "Gjs/Gtk-3.0";

export type GtkWidgetTypes = new (...args: any[]) => GtkWidgets;

export type GtkWidgets =
  | GtkBaseWidget
  | GtkDisplayWidget
  | GtkButtonWidget
  | GtkEntryWidget
  | GtkContainerWidget
  | GtkLayoutContainerWidgets
  | GtkMiscWidget;

export type GtkBaseWidget = Gtk.Widget | Gtk.Container | Gtk.Bin;

export type GtkDisplayWidget =
  | Gtk.Label
  | Gtk.AccelLabel
  | Gtk.Spinner
  | Gtk.Statusbar
  | Gtk.LevelBar
  | Gtk.ProgressBar
  | Gtk.InfoBar
  | Gtk.Image
  | Gtk.Separator
  | Gtk.VSeparator
  | Gtk.HSeparator
  | Gtk.TextView
  | Gtk.Scale
  | Gtk.VScale
  | Gtk.HScale;

export type GtkButtonWidget =
  | Gtk.Button
  | Gtk.CheckButton
  | Gtk.ToggleButton
  | Gtk.LinkButton
  | Gtk.MenuButton
  | Gtk.LockButton
  | Gtk.SpinButton
  | Gtk.ColorButton
  | Gtk.Switch
  | Gtk.ComboBox
  | Gtk.ComboBoxText
  | Gtk.FontButton
  | Gtk.AppChooserButton
  | Gtk.VolumeButton
  | Gtk.RadioButton
  | Gtk.FileChooserButton;

export type GtkEntryWidget = Gtk.Entry | Gtk.SearchEntry;

export type GtkContainerWidget =
  | Gtk.ScrolledWindow
  | Gtk.HeaderBar
  | Gtk.SearchBar
  | Gtk.ActionBar
  | Gtk.ListBox
  | Gtk.FlowBox
  | Gtk.Stack
  | Gtk.StackSwitcher
  | Gtk.StackSidebar
  | Gtk.TreeView
  | Gtk.TreeViewColumn
  | Gtk.CellRendererText
  | Gtk.CellRendererToggle
  | Gtk.CellRendererAccel
  | Gtk.CellRendererCombo
  | Gtk.CellRendererPixbuf
  | Gtk.CellRendererProgress
  | Gtk.CellRendererSpin
  | Gtk.CellRendererSpinner
  | Gtk.IconView
  | Gtk.Notebook
  | Gtk.Frame
  | Gtk.Paned
  | Gtk.HPaned
  | Gtk.VPaned
  | Gtk.MenuBar
  | Gtk.Toolbar
  | Gtk.ToolPalette
  | Gtk.PlacesSidebar;

export type GtkLayoutContainerWidgets =
  | Gtk.Box
  | Gtk.HBox
  | Gtk.VBox
  | Gtk.Grid
  | Gtk.Overlay
  | Gtk.Revealer
  | Gtk.Expander
  | Gtk.Fixed
  | Gtk.Adjustment;

export type GtkMiscWidget =
  | Gtk.Adjustment
  | Gtk.DrawingArea
  | Gtk.GLArea
  | Gtk.SizeGroup
  | Gtk.Tooltip;
