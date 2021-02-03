import Gtk from "gtk";
import {GtkPropWrapperProps} from "./GtkPropWrapper";

declare global {
  namespace JSX {
    interface IntrinsicElements extends GtkIntrinsicElements {}
    interface GtkIntrinsicElements {
      "gtk-widget": Partial<Gtk.Widget.ConstructorProperties>;
      "gtk-container": Partial<Gtk.Container.ConstructorProperties>;
      "gtk-bin": Partial<Gtk.Bin.ConstructorProperties>;
      "gtk-label": Partial<Gtk.Label.ConstructorProperties>;
      "gtk-accellabel": Partial<Gtk.AccelLabel.ConstructorProperties>;
      "gtk-spinner": Partial<Gtk.Spinner.ConstructorProperties>;
      "gtk-statusbar": Partial<Gtk.Statusbar.ConstructorProperties>;
      "gtk-levelbar": Partial<Gtk.LevelBar.ConstructorProperties>;
      "gtk-progressbar": Partial<Gtk.ProgressBar.ConstructorProperties>;
      "gtk-infobar": Partial<Gtk.InfoBar.ConstructorProperties>;
      "gtk-image": Partial<Gtk.Image.ConstructorProperties>;
      "gtk-separator": Partial<Gtk.Separator.ConstructorProperties>;
      "gtk-vseparator": Partial<Gtk.VSeparator.ConstructorProperties>;
      "gtk-hseparator": Partial<Gtk.HSeparator.ConstructorProperties>;
      "gtk-textview": Partial<Gtk.TextView.ConstructorProperties>;
      "gtk-scale": Partial<Gtk.Scale.ConstructorProperties>;
      "gtk-vscale": Partial<Gtk.VScale.ConstructorProperties>;
      "gtk-hscale": Partial<Gtk.HScale.ConstructorProperties>;
      "gtk-button": Partial<Gtk.Button.ConstructorProperties>;
      "gtk-checkbutton": Partial<Gtk.CheckButton.ConstructorProperties>;
      "gtk-togglebutton": Partial<Gtk.ToggleButton.ConstructorProperties>;
      "gtk-linkbutton": Partial<Gtk.LinkButton.ConstructorProperties>;
      "gtk-menubutton": Partial<Gtk.MenuButton.ConstructorProperties>;
      "gtk-lockbutton": Partial<Gtk.LockButton.ConstructorProperties>;
      "gtk-spinbutton": Partial<Gtk.SpinButton.ConstructorProperties>;
      "gtk-colorbutton": Partial<Gtk.ColorButton.ConstructorProperties>;
      "gtk-switch": Partial<Gtk.Switch.ConstructorProperties>;
      "gtk-combobox": Partial<Gtk.ComboBox.ConstructorProperties>;
      "gtk-comboboxtext": Partial<Gtk.ComboBoxText.ConstructorProperties>;
      "gtk-fontbutton": Partial<Gtk.FontButton.ConstructorProperties>;
      "gtk-appchooserbutton": Partial<Gtk.AppChooserButton.ConstructorProperties>;
      "gtk-volumebutton": Partial<Gtk.VolumeButton.ConstructorProperties>;
      "gtk-radiobutton": Partial<Gtk.RadioButton.ConstructorProperties>;
      "gtk-filechooserbutton": Partial<Gtk.FileChooserButton.ConstructorProperties>;
      "gtk-entry": Partial<Gtk.Entry.ConstructorProperties>;
      "gtk-searchentry": Partial<Gtk.SearchEntry.ConstructorProperties>;
      "gtk-scrolledwindow": Partial<Gtk.ScrolledWindow.ConstructorProperties>;
      "gtk-headerbar": Partial<Gtk.HeaderBar.ConstructorProperties>;
      "gtk-searchbar": Partial<Gtk.SearchBar.ConstructorProperties>;
      "gtk-actionbar": Partial<Gtk.ActionBar.ConstructorProperties>;
      "gtk-listbox": Partial<Gtk.ListBox.ConstructorProperties>;
      "gtk-flowbox": Partial<Gtk.FlowBox.ConstructorProperties>;
      "gtk-stack": Partial<Gtk.Stack.ConstructorProperties>;
      "gtk-stackswitcher": Partial<Gtk.StackSwitcher.ConstructorProperties>;
      "gtk-stacksidebar": Partial<Gtk.StackSidebar.ConstructorProperties>;
      "gtk-treeview": Partial<Gtk.TreeView.ConstructorProperties>;
      "gtk-iconview": Partial<Gtk.IconView.ConstructorProperties>;
      "gtk-notebook": Partial<Gtk.Notebook.ConstructorProperties>;
      "gtk-frame": Partial<Gtk.Frame.ConstructorProperties>;
      "gtk-paned": Partial<Gtk.Paned.ConstructorProperties>;
      "gtk-hpaned": Partial<Gtk.HPaned.ConstructorProperties>;
      "gtk-vpaned": Partial<Gtk.VPaned.ConstructorProperties>;
      "gtk-menubar": Partial<Gtk.MenuBar.ConstructorProperties>;
      "gtk-toolbar": Partial<Gtk.Toolbar.ConstructorProperties>;
      "gtk-toolpalette": Partial<Gtk.ToolPalette.ConstructorProperties>;
      "gtk-placessidebar": Partial<Gtk.PlacesSidebar.ConstructorProperties>;
      "gtk-box": Partial<Gtk.Box.ConstructorProperties>;
      "gtk-hbox": Partial<Gtk.HBox.ConstructorProperties>;
      "gtk-vbox": Partial<Gtk.VBox.ConstructorProperties>;
      "gtk-grid": Partial<Gtk.Grid.ConstructorProperties>;
      "gtk-overlay": Partial<Gtk.Overlay.ConstructorProperties>;
      "gtk-revealer": Partial<Gtk.Revealer.ConstructorProperties>;
      "gtk-expander": Partial<Gtk.Expander.ConstructorProperties>;
      "gtk-fixed": Partial<Gtk.Fixed.ConstructorProperties>;
      "gtk-adjustment": Partial<Gtk.Adjustment.ConstructorProperties>;
      "gtk-drawingarea": Partial<Gtk.DrawingArea.ConstructorProperties>;
      "gtk-glarea": Partial<Gtk.GLArea.ConstructorProperties>;
      "gtk-sizegroup": Partial<Gtk.SizeGroup.ConstructorProperties>;
      "gtk-tooltip": Partial<Gtk.Tooltip.ConstructorProperties>;
      "gtk-window": Partial<Gtk.Window.ConstructorProperties>;
      "gtk-prop-wrapper": GtkPropWrapperProps;
    }
  }
}
