import { PanelConfig } from "@/page/App/components/InspectPanel/interface"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import i18n from "@/i18n/config"
import { EditableInputIconType } from "@/page/App/components/PanelSetters/InputSetter/interface"

const baseWidgetName = "input"
export const IMAGE_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `${baseWidgetName}-basic`,
    groupName: i18n.t("editor.inspect.setter_group.basic"),
    children: [
      {
        id: `${baseWidgetName}-basic-source`,
        attrName: "imageSrc",
        expectedType: VALIDATION_TYPES.STRING,
        labelName: i18n.t("editor.inspect.setter_label.image_source"),
        isSetterSingleRow: true,
        setterType: "INPUT_SETTER",
      },
      {
        id: `${baseWidgetName}-basic-alt-text`,
        labelName: i18n.t("editor.inspect.setter_label.alt_text"),
        labelDesc: i18n.t("editor.inspect.setter_label.alt_text_desc"),
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "altText",
        setterType: "INPUT_SETTER",
      },
      {
        id: `${baseWidgetName}-basic-scale-type`,
        labelName: i18n.t("editor.inspect.setter_label.scale_type"),
        labelDesc: i18n.t("editor.inspect.setter_label.scale_type"),
        attrName: "objectFit",
        setterType: "BASE_SELECT_SETTER",
        options: ["container", "cover", "fill", "none", "scale-down"],
      },
    ],
  },
  {
    id: `${baseWidgetName}-adornments`,
    groupName: i18n.t("editor.inspect.setter_group.adornments"),
    children: [
      {
        id: `${baseWidgetName}-adornments-tooltip`,
        labelName: i18n.t("editor.inspect.setter_label.tooltip"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.tooltip"),
        attrName: "tooltipText",
        expectedType: VALIDATION_TYPES.STRING,
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: `${baseWidgetName}-layout`,
    groupName: i18n.t("editor.inspect.setter_group.layout"),
    children: [
      {
        id: `${baseWidgetName}-layout-hidden`,
        labelName: i18n.t("editor.inspect.setter_label.hidden"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.hidden"),
        attrName: "hidden",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLayout: true,
        openDynamic: true,
      },
    ],
  },
  {
    id: `${baseWidgetName}-style`,
    groupName: i18n.t("editor.inspect.setter_group.style"),
    children: [
      {
        id: `${baseWidgetName}-styles-list`,
        setterType: "LIST_SETTER",
        isSetterSingleRow: true,
        labelName: i18n.t("editor.inspect.setter_label.styles"),
        attrName: "styles",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-style-radius`,
            labelName: i18n.t("editor.inspect.setter_label.radius"),
            setterType: "EDITABLE_INPUT_SETTER",
            attrName: "radius",
            iconName: EditableInputIconType.RADIUS,
            defaultValue: "0px",
            expectedType: VALIDATION_TYPES.STRING,
          },
        ],
      },
    ],
  },
]
