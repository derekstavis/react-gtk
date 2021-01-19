import Gtk from "Gjs/Gtk-3.0";

declare global {
  namespace JSX {
    interface IntrinsicElements extends GtkIntrinsicElements {}
    interface GtkIntrinsicElements {
      "gtk-widget": Gtk.Widget_ConstructProps;
      "gtk-container": Gtk.Container_ConstructProps;
      "gtk-bin": Gtk.Bin_ConstructProps;
      "gtk-label": Gtk.Label_ConstructProps;
      "gtk-accellabel": Gtk.AccelLabel_ConstructProps;
      "gtk-spinner": Gtk.Spinner_ConstructProps;
      "gtk-statusbar": Gtk.Statusbar_ConstructProps;
      "gtk-levelbar": Gtk.LevelBar_ConstructProps;
      "gtk-progressbar": Gtk.ProgressBar_ConstructProps;
      "gtk-infobar": Gtk.InfoBar_ConstructProps;
      "gtk-image": Gtk.Image_ConstructProps;
      "gtk-separator": Gtk.Separator_ConstructProps;
      "gtk-vseparator": Gtk.VSeparator_ConstructProps;
      "gtk-hseparator": Gtk.HSeparator_ConstructProps;
      "gtk-textview": Gtk.TextView_ConstructProps;
      "gtk-scale": Gtk.Scale_ConstructProps;
      "gtk-vscale": Gtk.VScale_ConstructProps;
      "gtk-hscale": Gtk.HScale_ConstructProps;
      "gtk-button": Gtk.Button_ConstructProps;
      "gtk-checkbutton": Gtk.CheckButton_ConstructProps;
      "gtk-togglebutton": Gtk.ToggleButton_ConstructProps;
      "gtk-linkbutton": Gtk.LinkButton_ConstructProps;
      "gtk-menubutton": Gtk.MenuButton_ConstructProps;
      "gtk-lockbutton": Gtk.LockButton_ConstructProps;
      "gtk-spinbutton": Gtk.SpinButton_ConstructProps;
      "gtk-colorbutton": Gtk.ColorButton_ConstructProps;
      "gtk-switch": Gtk.Switch_ConstructProps;
      "gtk-combobox": Gtk.ComboBox_ConstructProps;
      "gtk-comboboxtext": Gtk.ComboBoxText_ConstructProps;
      "gtk-fontbutton": Gtk.FontButton_ConstructProps;
      "gtk-appchooserbutton": Gtk.AppChooserButton_ConstructProps;
      "gtk-volumebutton": Gtk.VolumeButton_ConstructProps;
      "gtk-radiobutton": Gtk.RadioButton_ConstructProps;
      "gtk-filechooserbutton": Gtk.FileChooserButton_ConstructProps;
      "gtk-entry": Gtk.Entry_ConstructProps;
      "gtk-searchentry": Gtk.SearchEntry_ConstructProps;
      "gtk-scrolledwindow": Gtk.ScrolledWindow_ConstructProps;
      "gtk-headerbar": Gtk.HeaderBar_ConstructProps;
      "gtk-searchbar": Gtk.SearchBar_ConstructProps;
      "gtk-actionbar": Gtk.ActionBar_ConstructProps;
      "gtk-listbox": Gtk.ListBox_ConstructProps;
      "gtk-flowbox": Gtk.FlowBox_ConstructProps;
      "gtk-stack": Gtk.Stack_ConstructProps;
      "gtk-stackswitcher": Gtk.StackSwitcher_ConstructProps;
      "gtk-stacksidebar": Gtk.StackSidebar_ConstructProps;
      "gtk-treeview": Gtk.TreeView_ConstructProps;
      "gtk-iconview": Gtk.IconView_ConstructProps;
      "gtk-notebook": Gtk.Notebook_ConstructProps;
      "gtk-frame": Gtk.Frame_ConstructProps;
      "gtk-paned": Gtk.Paned_ConstructProps;
      "gtk-hpaned": Gtk.HPaned_ConstructProps;
      "gtk-vpaned": Gtk.VPaned_ConstructProps;
      "gtk-menubar": Gtk.MenuBar_ConstructProps;
      "gtk-toolbar": Gtk.Toolbar_ConstructProps;
      "gtk-toolpalette": Gtk.ToolPalette_ConstructProps;
      "gtk-placessidebar": Gtk.PlacesSidebar_ConstructProps;
      "gtk-box": Gtk.Box_ConstructProps;
      "gtk-hbox": Gtk.HBox_ConstructProps;
      "gtk-vbox": Gtk.VBox_ConstructProps;
      "gtk-grid": Gtk.Grid_ConstructProps;
      "gtk-overlay": Gtk.Overlay_ConstructProps;
      "gtk-revealer": Gtk.Revealer_ConstructProps;
      "gtk-expander": Gtk.Expander_ConstructProps;
      "gtk-fixed": Gtk.Fixed_ConstructProps;
      "gtk-adjustment": Gtk.Adjustment_ConstructProps;
      "gtk-drawingarea": Gtk.DrawingArea_ConstructProps;
      "gtk-glarea": Gtk.GLArea_ConstructProps;
      "gtk-sizegroup": Gtk.SizeGroup_ConstructProps;
      "gtk-tooltip": Gtk.Tooltip_ConstructProps;
      "gtk-window": Gtk.Window_ConstructProps;
    }
  }
}
