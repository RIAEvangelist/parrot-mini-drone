module.exports = {
  // libARNetworkAL/Includes/libARNetworkAL/ARNETWORKAL_Manager.h
  ARNETWORKAL_MANAGER_DEFAULT_ID_MAX: 256,

  // ARNETWORKAL_Frame_t identifiers
  BD_NET_CD_NONACK_ID: 10,
  BD_NET_CD_ACK_ID: 11,
  BD_NET_CD_EMERGENCY_ID: 12,
  BD_NET_CD_VIDEO_ACK_ID: 13,
  BD_NET_DC_VIDEO_DATA_ID: 125,
  BD_NET_DC_EVENT_ID: 126,
  BD_NET_DC_NAVDATA_ID: 127,

  // eARCOMMANDS_ID_PROJECT
  ARCOMMANDS_ID_PROJECT_COMMON: 0,

  // eARCOMMANDS_ID_COMMON_CLASS
  ARCOMMANDS_ID_COMMON_CLASS_NETWORK: 0,
  ARCOMMANDS_ID_COMMON_CLASS_NETWORKEVENT: 1,
  ARCOMMANDS_ID_COMMON_CLASS_SETTINGS: 2,
  ARCOMMANDS_ID_COMMON_CLASS_SETTINGSSTATE: 3,
  ARCOMMANDS_ID_COMMON_CLASS_COMMON: 4,
  ARCOMMANDS_ID_COMMON_CLASS_COMMONSTATE: 5,
  ARCOMMANDS_ID_COMMON_CLASS_OVERHEAT: 6,
  ARCOMMANDS_ID_COMMON_CLASS_OVERHEATSTATE: 7,
  ARCOMMANDS_ID_COMMON_CLASS_CONTROLLERSTATE: 8,
  ARCOMMANDS_ID_COMMON_CLASS_WIFISETTINGS: 9,
  ARCOMMANDS_ID_COMMON_CLASS_WIFISETTINGSSTATE: 10,
  ARCOMMANDS_ID_COMMON_CLASS_MAVLINK: 11,
  ARCOMMANDS_ID_COMMON_CLASS_MAVLINKSTATE: 12,
  ARCOMMANDS_ID_COMMON_CLASS_CALIBRATION: 13,
  ARCOMMANDS_ID_COMMON_CLASS_CALIBRATIONSTATE: 14,
  ARCOMMANDS_ID_COMMON_CLASS_CAMERASETTINGSSTATE: 15,
  ARCOMMANDS_ID_COMMON_CLASS_GPS: 16,
  ARCOMMANDS_ID_COMMON_CLASS_FLIGHTPLANSTATE: 17,
  ARCOMMANDS_ID_COMMON_CLASS_FLIGHTPLANEVENT: 19,
  ARCOMMANDS_ID_COMMON_CLASS_ARLIBSVERSIONSSTATE: 18,

  // eARCOMMANDS_ID_COMMON_NETWORK_CMD
  ARCOMMANDS_ID_COMMON_NETWORK_CMD_DISCONNECT: 0,
  ARCOMMANDS_ID_COMMON_NETWORK_CMD_MAX: 1,

  // eARCOMMANDS_ID_COMMON_NETWORKEVENT_CMD
  ARCOMMANDS_ID_COMMON_NETWORKEVENT_CMD_DISCONNECTION: 0,
  ARCOMMANDS_ID_COMMON_NETWORKEVENT_CMD_MAX: 1,

  // eARCOMMANDS_ID_COMMON_SETTINGS_CMD
  ARCOMMANDS_ID_COMMON_SETTINGS_CMD_ALLSETTINGS: 0,
  ARCOMMANDS_ID_COMMON_SETTINGS_CMD_RESET: 1,
  ARCOMMANDS_ID_COMMON_SETTINGS_CMD_PRODUCTNAME: 2,
  ARCOMMANDS_ID_COMMON_SETTINGS_CMD_COUNTRY: 3,
  ARCOMMANDS_ID_COMMON_SETTINGS_CMD_AUTOCOUNTRY: 4,
  ARCOMMANDS_ID_COMMON_SETTINGS_CMD_MAX: 5,

  // eARCOMMANDS_ID_COMMON_SETTINGSTATE_CMD
  ARCOMMANDS_ID_COMMON_SETTINGSSTATE_CMD_ALLSETTINGSCHANGED: 0,
  ARCOMMANDS_ID_COMMON_SETTINGSSTATE_CMD_RESETCHANGED: 1,
  ARCOMMANDS_ID_COMMON_SETTINGSSTATE_CMD_PRODUCTNAMECHANGED: 2,
  ARCOMMANDS_ID_COMMON_SETTINGSSTATE_CMD_PRODUCTVERSIONCHANGED: 3,
  ARCOMMANDS_ID_COMMON_SETTINGSSTATE_CMD_PRODUCTSERIALHIGHCHANGED: 4,
  ARCOMMANDS_ID_COMMON_SETTINGSSTATE_CMD_PRODUCTSERIALLOWCHANGED: 5,
  ARCOMMANDS_ID_COMMON_SETTINGSSTATE_CMD_COUNTRYCHANGED: 6,
  ARCOMMANDS_ID_COMMON_SETTINGSSTATE_CMD_AUTOCOUNTRYCHANGED: 7,
  ARCOMMANDS_ID_COMMON_SETTINGSSTATE_CMD_MAX: 8,

  // eARCOMMANDS_ID_COMMON_COMMON_CMD
  ARCOMMANDS_ID_COMMON_COMMON_CMD_ALLSTATES: 0,
  ARCOMMANDS_ID_COMMON_COMMON_CMD_CURRENTDATE: 1,
  ARCOMMANDS_ID_COMMON_COMMON_CMD_CURRENTTIME: 2,
  ARCOMMANDS_ID_COMMON_COMMON_CMD_REBOOT: 3,
  ARCOMMANDS_ID_COMMON_COMMON_CMD_MAX: 4,

  // eARCOMMANDS_ID_COMMON_COMMONSTATE_CMD;
  ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_ALLSTATESCHANGED: 0,
  ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_BATTERYSTATECHANGED: 1,
  ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_MASSSTORAGESTATELISTCHANGED: 2,
  ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_MASSSTORAGEINFOSTATELISTCHANGED: 3,
  ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_CURRENTDATECHANGED: 4,
  ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_CURRENTTIMECHANGED: 5,
  ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_MASSSTORAGEINFOREMAININGLISTCHANGED: 6,
  ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_WIFISIGNALCHANGED: 6,
  ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_SENSORSSTATESLISTCHANGED: 7,
  ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_MAX: 8,

  // eARCOMMANDS_ID_COMMON_OVERHEAT_CMD
  ARCOMMANDS_ID_COMMON_OVERHEAT_CMD_SWITCHOFF: 0,
  ARCOMMANDS_ID_COMMON_OVERHEAT_CMD_VENTILATE: 1,
  ARCOMMANDS_ID_COMMON_OVERHEAT_CMD_MAX: 2,

  // eARCOMMANDS_ID_COMMON_OVERHEATSTATE_CMD
  ARCOMMANDS_ID_COMMON_OVERHEATSTATE_CMD_OVERHEATCHANGED: 0,
  ARCOMMANDS_ID_COMMON_OVERHEATSTATE_CMD_OVERHEATREGULATIONCHANGED: 1,
  ARCOMMANDS_ID_COMMON_OVERHEATSTATE_CMD_MAX: 2,

  // eARCOMMANDS_ID_COMMON_CONTROLLERSTATE_CMD
  ARCOMMANDS_ID_COMMON_CONTROLLERSTATE_CMD_ISPILOTINGCHANGED: 0,
  ARCOMMANDS_ID_COMMON_CONTROLLERSTATE_CMD_MAX: 1,

  // eARCOMMANDS_ID_COMMON_WIFISETTINGS_CMD
  ARCOMMANDS_ID_COMMON_WIFISETTINGS_CMD_OUTDOORSETTING: 0,
  ARCOMMANDS_ID_COMMON_WIFISETTINGS_CMD_MAX: 1,

  // eARCOMMANDS_ID_COMMON_WIFISETTINGS_CMD
  ARCOMMANDS_ID_COMMON_WIFISETTINGSSTATE_CMD_OUTDOORSETTINGSCHANGED: 0,
  ARCOMMANDS_ID_COMMON_WIFISETTINGSSTATE_CMD_MAX: 1,

  // eARCOMMANDS_ID_COMMON_MAVLINK_CMD
  ARCOMMANDS_ID_COMMON_MAVLINK_CMD_START: 0,
  ARCOMMANDS_ID_COMMON_MAVLINK_CMD_PAUSE: 1,
  ARCOMMANDS_ID_COMMON_MAVLINK_CMD_STOP: 2,
  ARCOMMANDS_ID_COMMON_MAVLINK_CMD_MAX: 3,

  // eARCOMMANDS_ID_COMMON_MAVLINKSTATE_CMD
  ARCOMMANDS_ID_COMMON_MAVLINKSTATE_CMD_MAVLINKFILEPLAYINGSTATECHANGED: 0,
  ARCOMMANDS_ID_COMMON_MAVLINKSTATE_CMD_MAVLINKPLAYERRORSTATECHANGED: 1,
  ARCOMMANDS_ID_COMMON_MAVLINKSTATE_CMD_MAX: 2,

  // eARCOMMANDS_ID_COMMON_CALIBRATION_CMD
  ARCOMMANDS_ID_COMMON_CALIBRATION_CMD_MAGNETOCALIBRATION: 0,
  ARCOMMANDS_ID_COMMON_CALIBRATION_CMD_MAX: 1,

  // eARCOMMANDS_ID_COMMON_CALIBRATIONSTATE_CMD
  ARCOMMANDS_ID_COMMON_CALIBRATIONSTATE_CMD_MAGNETOCALIBRATIONSTATECHANGED: 0,
  ARCOMMANDS_ID_COMMON_CALIBRATIONSTATE_CMD_MAGNETOCALIBRATIONREQUIREDSTATE: 1,
  ARCOMMANDS_ID_COMMON_CALIBRATIONSTATE_CMD_MAGNETOCALIBRATIONAXISTOCALIBRATECHANGED: 2,
  ARCOMMANDS_ID_COMMON_CALIBRATIONSTATE_CMD_MAGNETOCALIBRATIONSTARTEDCHANGED: 3,
  ARCOMMANDS_ID_COMMON_CALIBRATIONSTATE_CMD_MAX: 4,

  // eARCOMMANDS_ID_COMMON_CAMERASETTINGSSTATE_CMD
  ARCOMMANDS_ID_COMMON_CAMERASETTINGSSTATE_CMD_CAMERASETTINGSCHANGED: 0,
  ARCOMMANDS_ID_COMMON_CAMERASETTINGSSTATE_CMD_MAX: 1,

  // eARCOMMANDS_ID_COMMON_GPS_CMD
  ARCOMMANDS_ID_COMMON_GPS_CMD_CONTROLLERPOSITIONFORRUN: 0,
  ARCOMMANDS_ID_COMMON_GPS_CMD_MAX: 1,

  // eARCOMMANDS_ID_COMMON_FLIGHTPLANSTATE_CMD
  ARCOMMANDS_ID_COMMON_FLIGHTPLANSTATE_CMD_AVAILABILITYSTATECHANGED: 0,
  ARCOMMANDS_ID_COMMON_FLIGHTPLANSTATE_CMD_COMPONENTSTATELISTCHANGED: 1,
  ARCOMMANDS_ID_COMMON_FLIGHTPLANSTATE_CMD_MAX: 2,

  // eARCOMMANDS_ID_COMMON_FLIGHTPLANEVENT_CMD
  ARCOMMANDS_ID_COMMON_FLIGHTPLANEVENT_CMD_STARTINGERROREVENT: 0,
  ARCOMMANDS_ID_COMMON_FLIGHTPLANEVENT_CMD_SPEEDBRIDLEEVENT: 1,
  ARCOMMANDS_ID_COMMON_FLIGHTPLANEVENT_CMD_MAX: 2,

  // eARCOMMANDS_ID_COMMON_ARLIBVERSIONSSTATE_CMD
  ARCOMMANDS_ID_COMMON_ARLIBSVERSIONSSTATE_CMD_CONTROLLERLIBARCOMMANDSVERSION: 0,
  ARCOMMANDS_ID_COMMON_ARLIBSVERSIONSSTATE_CMD_SKYCONTROLLERLIBARCOMMANDSVERSION: 1,
  ARCOMMANDS_ID_COMMON_ARLIBSVERSIONSSTATE_CMD_DEVICELIBARCOMMANDSVERSION: 2,
  ARCOMMANDS_ID_COMMON_ARLIBSVERSIONSSTATE_CMD_MAX: 3,

 // eARCOMMANDS_COMMON_NETWORKEVENT_DISCONNECTION_CAUSE
  ARCOMMANDS_COMMON_NETWORKEVENT_DISCONNECTION_CAUSE_OFF_BUTTON: 0,
  ARCOMMANDS_COMMON_NETWORKEVENT_DISCONNECTION_CAUSE_UNKNOWN: 1,
  ARCOMMANDS_COMMON_NETWORKEVENT_DISCONNECTION_CAUSE_MAX: 2,

  // eARCOMMANDS_COMMON_COMMONSTATE_SENSORSTATELISTCHANGED_SENSORNAME
  ARCOMMANDS_COMMON_COMMONSTATE_SENSORSSTATESLISTCHANGED_SENSORNAME_IMU: 0,
  ARCOMMANDS_COMMON_COMMONSTATE_SENSORSSTATESLISTCHANGED_SENSORNAME_BAROMETER: 1,
  ARCOMMANDS_COMMON_COMMONSTATE_SENSORSSTATESLISTCHANGED_SENSORNAME_ULTRASOUND: 2,
  ARCOMMANDS_COMMON_COMMONSTATE_SENSORSSTATESLISTCHANGED_SENSORNAME_GPS: 3,
  ARCOMMANDS_COMMON_COMMONSTATE_SENSORSSTATESLISTCHANGED_SENSORNAME_MAGNETOMETER: 4,
  ARCOMMANDS_COMMON_COMMONSTATE_SENSORSSTATESLISTCHANGED_SENSORNAME_VERTICAL_CAMERA: 5,
  ARCOMMANDS_COMMON_COMMONSTATE_SENSORSSTATESLISTCHANGED_SENSORNAME_MAX: 6,

  // eARCOMMANDS_COMMON_MAVLINK_START_TYPE
  ARCOMMANDS_COMMON_MAVLINK_START_TYPE_FLIGHTPLAN: 0,
  ARCOMMANDS_COMMON_MAVLINK_START_TYPE_MAPMYHOUSE: 1,
  ARCOMMANDS_COMMON_MAVLINK_START_TYPE_MAX: 2,

  // eARCOMMANDS_COMMON_MAVLINKSTATE_MAVLINKFILEPLAYINGSTATECHANGED_STATE
  ARCOMMANDS_COMMON_MAVLINKSTATE_MAVLINKFILEPLAYINGSTATECHANGED_STATE_PLAYING: 0,
  ARCOMMANDS_COMMON_MAVLINKSTATE_MAVLINKFILEPLAYINGSTATECHANGED_STATE_STOPPED: 1,
  ARCOMMANDS_COMMON_MAVLINKSTATE_MAVLINKFILEPLAYINGSTATECHANGED_STATE_PAUSED: 2,
  ARCOMMANDS_COMMON_MAVLINKSTATE_MAVLINKFILEPLAYINGSTATECHANGED_STATE_MAX: 3,

  // eARCOMMANDS_COMMON_MAVLINKSTATE_MAVLINKFILEPLAYINGSTATECHANGED_TYPE
  ARCOMMANDS_COMMON_MAVLINKSTATE_MAVLINKFILEPLAYINGSTATECHANGED_TYPE_FLIGHTPLAN: 0,
  ARCOMMANDS_COMMON_MAVLINKSTATE_MAVLINKFILEPLAYINGSTATECHANGED_TYPE_MAPMYHOUSE: 1,
  ARCOMMANDS_COMMON_MAVLINKSTATE_MAVLINKFILEPLAYINGSTATECHANGED_TYPE_MAX: 2,

  // eARCOMMANDS_COMMON_MAVLINKSTATE_MAVLINKPLAYERRORSTATECHANGED_ERROR
  ARCOMMANDS_COMMON_MAVLINKSTATE_MAVLINKPLAYERRORSTATECHANGED_ERROR_NONE: 0,
  ARCOMMANDS_COMMON_MAVLINKSTATE_MAVLINKPLAYERRORSTATECHANGED_ERROR_NOTINOUTDOORMODE: 1,
  ARCOMMANDS_COMMON_MAVLINKSTATE_MAVLINKPLAYERRORSTATECHANGED_ERROR_GPSNOTFIXED: 2,
  ARCOMMANDS_COMMON_MAVLINKSTATE_MAVLINKPLAYERRORSTATECHANGED_ERROR_NOTCALIBRATED: 3,
  ARCOMMANDS_COMMON_MAVLINKSTATE_MAVLINKPLAYERRORSTATECHANGED_ERROR_MAX: 4,

  // eARCOMMANDS_COMMON_CALIBRATIONSTATE_MAGNETOCALIBRATIONAXISTOCALIBRATECHANGED_AXIS;
  ARCOMMANDS_COMMON_CALIBRATIONSTATE_MAGNETOCALIBRATIONAXISTOCALIBRATECHANGED_AXIS_XAXIS: 0,
  ARCOMMANDS_COMMON_CALIBRATIONSTATE_MAGNETOCALIBRATIONAXISTOCALIBRATECHANGED_AXIS_YAXIS: 1,
  ARCOMMANDS_COMMON_CALIBRATIONSTATE_MAGNETOCALIBRATIONAXISTOCALIBRATECHANGED_AXIS_ZAXIS: 2,
  ARCOMMANDS_COMMON_CALIBRATIONSTATE_MAGNETOCALIBRATIONAXISTOCALIBRATECHANGED_AXIS_NONE: 3,
  ARCOMMANDS_COMMON_CALIBRATIONSTATE_MAGNETOCALIBRATIONAXISTOCALIBRATECHANGED_AXIS_MAX: 4,

  // eARCOMMANDS_COMMON_FLIGHTPLANSTATE_COMPONENTSTATELISTCHANGED_COMPONENT
  ARCOMMANDS_COMMON_FLIGHTPLANSTATE_COMPONENTSTATELISTCHANGED_COMPONENT_GPS: 0,
  ARCOMMANDS_COMMON_FLIGHTPLANSTATE_COMPONENTSTATELISTCHANGED_COMPONENT_CALIBRATION: 1,
  ARCOMMANDS_COMMON_FLIGHTPLANSTATE_COMPONENTSTATELISTCHANGED_COMPONENT_MAVLINK_FILE: 2,
  ARCOMMANDS_COMMON_FLIGHTPLANSTATE_COMPONENTSTATELISTCHANGED_COMPONENT_TAKEOFF: 3,
  ARCOMMANDS_COMMON_FLIGHTPLANSTATE_COMPONENTSTATELISTCHANGED_COMPONENT_MAX: 4,

  // eARMEDIA_ENCAPSULER_CODEC
  CODEC_UNKNNOWN: 0,
  CODEC_VLIB: 1,
  CODEC_P264: 2,
  CODEC_MPEG4_VISUAL: 3,
  CODEC_MPEG4_AVC: 4,
  CODEC_MOTION_JPEG: 5,

  // eARMEDIA_ENCAPSULER_FRAME_TYPE;
  ARMEDIA_ENCAPSULER_FRAME_TYPE_UNKNNOWN: 0,
  ARMEDIA_ENCAPSULER_FRAME_TYPE_I_FRAME: 1,
  ARMEDIA_ENCAPSULER_FRAME_TYPE_P_FRAME: 2,
  ARMEDIA_ENCAPSULER_FRAME_TYPE_JPEG: 3,
  ARMEDIA_ENCAPSULER_FRAME_TYPE_MAX: 4,

  // eARNETWORK_MANAGER_INTERNAL_BUFFER_ID
  ARNETWORK_MANAGER_INTERNAL_BUFFER_ID_PING: 0,
  ARNETWORK_MANAGER_INTERNAL_BUFFER_ID_PONG: 1,
  ARNETWORK_MANAGER_INTERNAL_BUFFER_ID_MAX: 3,

  // eARNETWORKAL_FRAME_TYPE
  ARNETWORKAL_FRAME_TYPE_UNINITIALIZED: 0,
  ARNETWORKAL_FRAME_TYPE_ACK: 1,
  ARNETWORKAL_FRAME_TYPE_DATA: 2,
  ARNETWORKAL_FRAME_TYPE_DATA_LOW_LATENCY: 3,
  ARNETWORKAL_FRAME_TYPE_DATA_WITH_ACK: 4,
  ARNETWORKAL_FRAME_TYPE_MAX: 5,
};