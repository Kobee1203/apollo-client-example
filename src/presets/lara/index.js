import accordion from './accordion/index.js';
import accordioncontent from './accordioncontent/index.js';
import accordionheader from './accordionheader/index.js';
import accordionpanel from './accordionpanel/index.js';
import autocomplete from './autocomplete/index.js';
import avatar from './avatar/index.js';
import avatargroup from './avatargroup/index.js';
import badge from './badge/index.js';
import badgedirective from './badgedirective/index.js';
import blockui from './blockui/index.js';
import breadcrumb from './breadcrumb/index.js';
import button from './button/index.js';
import buttongroup from './buttongroup/index.js';
import card from './card/index.js';
import carousel from './carousel/index.js';
import cascadeselect from './cascadeselect/index.js';
import checkbox from './checkbox/index.js';
import chip from './chip/index.js';
import colorpicker from './colorpicker/index.js';
import confirmdialog from './confirmdialog/index.js';
import confirmpopup from './confirmpopup/index.js';
import contextmenu from './contextmenu/index.js';
import datatable from './datatable/index.js';
import dataview from './dataview/index.js';
import datepicker from './datepicker/index.js';
import deferred from './deferred/index.js';
import dialog from './dialog/index.js';
import divider from './divider/index.js';
import dock from './dock/index.js';
import drawer from './drawer/index.js';
import fieldset from './fieldset/index.js';
import fileupload from './fileupload/index.js';
import floatlabel from './floatlabel/index.js';
import galleria from './galleria/index.js';
import global from './global.js';
import iconfield from './iconfield/index.js';
import image from './image/index.js';
import inplace from './inplace/index.js';
import inputgroup from './inputgroup/index.js';
import inputgroupaddon from './inputgroupaddon/index.js';
import inputmask from './inputmask/index.js';
import inputnumber from './inputnumber/index.js';
import inputotp from './inputotp/index.js';
import inputtext from './inputtext/index.js';
import knob from './knob/index.js';
import listbox from './listbox/index.js';
import megamenu from './megamenu/index.js';
import menu from './menu/index.js';
import menubar from './menubar/index.js';
import message from './message/index.js';
import metergroup from './metergroup/index.js';
import multiselect from './multiselect/index.js';
import orderlist from './orderlist/index.js';
import organizationchart from './organizationchart/index.js';
import overlaybadge from './overlaybadge/index.js';
import paginator from './paginator/index.js';
import panel from './panel/index.js';
import panelmenu from './panelmenu/index.js';
import password from './password/index.js';
import picklist from './picklist/index.js';
import popover from './popover/index.js';
import progressbar from './progressbar/index.js';
import progressspinner from './progressspinner/index.js';
import radiobutton from './radiobutton/index.js';
import rating from './rating/index.js';
import ripple from './ripple/index.js';
import scrollpanel from './scrollpanel/index.js';
import scrolltop from './scrolltop/index.js';
import select from './select/index.js';
import selectbutton from './selectbutton/index.js';
import skeleton from './skeleton/index.js';
import slider from './slider/index.js';
import speeddial from './speeddial/index.js';
import splitbutton from './splitbutton/index.js';
import splitter from './splitter/index.js';
import splitterpanel from './splitterpanel/index.js';
import step from './step/index.js';
import stepitem from './stepitem/index.js';
import steplist from './steplist/index.js';
import steppanels from './steppanels/index.js';
import stepper from './stepper/index.js';
import steps from './steps/index.js';
import tab from './tab/index.js';
import tablist from './tablist/index.js';
import tabmenu from './tabmenu/index.js';
import tabpanel from './tabpanel/index.js';
import tabpanels from './tabpanels/index.js';
import tabs from './tabs/index.js';
import tabview from './tabview/index.js';
import tag from './tag/index.js';
import terminal from './terminal/index.js';
import textarea from './textarea/index.js';
import tieredmenu from './tieredmenu/index.js';
import timeline from './timeline/index.js';
import toast from './toast/index.js';
import togglebutton from './togglebutton/index.js';
import toggleswitch from './toggleswitch/index.js';
import toolbar from './toolbar/index.js';
import tooltip from './tooltip/index.js';
import tree from './tree/index.js';
import treeselect from './treeselect/index.js';
import treetable from './treetable/index.js';

export default {
    global,
    directives: {
        badge: badgedirective,
        ripple,
        tooltip
    },

    //forms
    autocomplete,
    select,
    dropdown: select,
    inputnumber,
    inputtext,
    datepicker,
    calendar: datepicker,
    checkbox,
    radiobutton,
    toggleswitch,
    inputswitch: toggleswitch,
    selectbutton,
    slider,
    rating,
    multiselect,
    togglebutton,
    cascadeselect,
    listbox,
    colorpicker,
    inputgroup,
    inputgroupaddon,
    inputmask,
    knob,
    treeselect,
    textarea,
    password,
    iconfield,
    floatlabel,
    inputotp,

    //buttons
    button,
    buttongroup,
    splitbutton,
    speeddial,

    //data
    paginator,
    datatable,
    tree,
    dataview,
    organizationchart,
    orderlist,
    picklist,
    treetable,
    timeline,

    //panels
    accordion,
    accordionpanel,
    accordionheader,
    accordioncontent,
    panel,
    fieldset,
    card,
    tabview,
    divider,
    toolbar,
    scrollpanel,
    splitter,
    splitterpanel,
    stepper,
    steplist,
    step,
    stepitem,
    steppanels,
    deferred,
    tab,
    tabs,
    tablist,
    tabpanels,
    tabpanel,

    //file
    fileupload,

    //menu
    contextmenu,
    menu,
    menubar,
    steps,
    tieredmenu,
    breadcrumb,
    panelmenu,
    megamenu,
    dock,
    tabmenu,

    //overlays
    dialog,
    popover,
    sidebar: popover,
    drawer,
    overlaypanel: drawer,
    confirmpopup,
    confirmdialog,

    //messages
    message,
    toast,

    //media
    carousel,
    galleria,
    image,

    //misc
    badge,
    overlaybadge,
    avatar,
    avatargroup,
    tag,
    chip,
    progressbar,
    skeleton,
    scrolltop,
    terminal,
    blockui,
    metergroup,
    inplace,
    progressspinner
};
