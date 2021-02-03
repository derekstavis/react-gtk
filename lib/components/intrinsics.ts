import Gtk from "gtk";
import { GtkPropWrapperProps } from "./GtkPropWrapper";

declare global {
  namespace JSX {
    interface IntrinsicElements extends GtkIntrinsicElements {}
    interface GtkIntrinsicElements {
      "gtk-actionbar": Partial<Gtk.ActionBar>;
      "gtk-appchooserbutton": Partial<Gtk.AppChooserButton.ConstructorProperties>;
      "gtk-bin": Partial<Gtk.Bin.ConstructorProperties>;
      "gtk-box": Partial<Gtk.Box.ConstructorProperties>;
      "gtk-button": Partial<Gtk.Button.ConstructorProperties>;
      "gtk-checkbutton": Partial<Gtk.CheckButton.ConstructorProperties>;
      "gtk-colorbutton": Partial<Gtk.ColorButton.ConstructorProperties>;
      "gtk-combobox": Partial<Gtk.ComboBox.ConstructorProperties>;
      "gtk-comboboxtext": Partial<Gtk.ComboBoxText.ConstructorProperties>;
      "gtk-container": Partial<Gtk.Container.ConstructorProperties>;
      "gtk-drawingarea": Partial<Gtk.DrawingArea.ConstructorProperties>;
      "gtk-entry": Partial<Gtk.Entry.ConstructorProperties>;
      "gtk-expander": Partial<Gtk.Expander.ConstructorProperties>;
      "gtk-filechooserbutton": Partial<Gtk.FileChooserButton.ConstructorProperties>;
      "gtk-fixed": Partial<Gtk.Fixed.ConstructorProperties>;
      "gtk-flowbox": Partial<Gtk.FlowBox.ConstructorProperties>;
      "gtk-fontbutton": Partial<Gtk.FontButton.ConstructorProperties>;
      "gtk-frame": Partial<Gtk.Frame.ConstructorProperties>;
      "gtk-glarea": Partial<Gtk.GLArea.ConstructorProperties>;
      "gtk-grid": Partial<Gtk.Grid.ConstructorProperties>;
      "gtk-headerbar": Partial<Gtk.HeaderBar.ConstructorProperties>;
      "gtk-hpaned": Partial<Gtk.HPaned.ConstructorProperties>;
      "gtk-hscale": Partial<Gtk.HScale.ConstructorProperties>;
      "gtk-hseparator": Partial<Gtk.HSeparator.ConstructorProperties>;
      "gtk-iconview": Partial<Gtk.IconView.ConstructorProperties>;
      "gtk-image": Partial<Gtk.Image.ConstructorProperties>;
      "gtk-infobar": Partial<Gtk.InfoBar.ConstructorProperties>;
      "gtk-label": Partial<Gtk.Label.ConstructorProperties>;
      "gtk-levelbar": Partial<Gtk.LevelBar.ConstructorProperties>;
      "gtk-linkbutton": Partial<Gtk.LinkButton.ConstructorProperties>;
      "gtk-listbox": Partial<Gtk.ListBox.ConstructorProperties>;
      "gtk-lockbutton": Partial<Gtk.LockButton.ConstructorProperties>;
      "gtk-menubar": Partial<Gtk.MenuBar.ConstructorProperties>;
      "gtk-menubutton": Partial<Gtk.MenuButton.ConstructorProperties>;
      "gtk-notebook": Partial<Gtk.Notebook.ConstructorProperties>;
      "gtk-overlay": Partial<Gtk.Overlay.ConstructorProperties>;
      "gtk-paned": Partial<Gtk.Paned.ConstructorProperties>;
      "gtk-placessidebar": Partial<Gtk.PlacesSidebar.ConstructorProperties>;
      "gtk-progressbar": Partial<Gtk.ProgressBar.ConstructorProperties>;
      "gtk-radiobutton": Partial<Gtk.RadioButton.ConstructorProperties>;
      "gtk-revealer": Partial<Gtk.Revealer.ConstructorProperties>;
      "gtk-scale": Partial<Gtk.Scale.ConstructorProperties>;
      "gtk-scrolledwindow": Partial<Gtk.ScrolledWindow.ConstructorProperties>;
      "gtk-searchbar": Partial<Gtk.SearchBar.ConstructorProperties>;
      "gtk-separator": Partial<Gtk.Separator.ConstructorProperties>;
      "gtk-sizegroup": Partial<Gtk.SizeGroup.ConstructorProperties>;
      "gtk-spinbutton": Partial<Gtk.SpinButton.ConstructorProperties>;
      "gtk-spinner": Partial<Gtk.Spinner.ConstructorProperties>;
      "gtk-stack": Partial<Gtk.Stack.ConstructorProperties>;
      "gtk-stacksidebar": Partial<Gtk.StackSidebar.ConstructorProperties>;
      "gtk-stackswitcher": Partial<Gtk.StackSwitcher.ConstructorProperties>;
      "gtk-statusbar": Partial<Gtk.Statusbar.ConstructorProperties>;
      "gtk-switch": Partial<Gtk.Switch.ConstructorProperties>;
      "gtk-textview": Partial<Gtk.TextView.ConstructorProperties>;
      "gtk-togglebutton": Partial<Gtk.ToggleButton.ConstructorProperties>;
      "gtk-toolbar": Partial<Gtk.Toolbar.ConstructorProperties>;
      "gtk-toolpalette": Partial<Gtk.ToolPalette.ConstructorProperties>;
      "gtk-tooltip": Partial<Gtk.Tooltip.ConstructorProperties>;
      "gtk-treeview": Partial<Gtk.TreeView.ConstructorProperties>;
      "gtk-volumebutton": Partial<Gtk.VolumeButton.ConstructorProperties>;
      "gtk-vpaned": Partial<Gtk.VPaned.ConstructorProperties>;
      "gtk-vscale": Partial<Gtk.VScale.ConstructorProperties>;
      "gtk-vseparator": Partial<Gtk.VSeparator.ConstructorProperties>;
      "gtk-widget": Partial<Gtk.Widget.ConstructorProperties>;
      "gtk-window": Partial<Gtk.Window.ConstructorProperties>;
      "gtk-prop-wrapper": GtkPropWrapperProps;
    }
  }
}
