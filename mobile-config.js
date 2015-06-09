
App.info({
  name: 'Sighty',
  description: 'The Instant Answering App', // app description
  version: '0.0.1'
});

App.icons({
  'android_ldpi': 'public/icons/icon-ldpi.png', // specifies android icons
  'android_mdpi': 'public/icons/icon-mdpi.png',
  'android_hdpi': 'public/icons/icon-hdpi.png',
  'android_xhdpi': 'public/icons/icon-xhdpi.png',
  'iphone': 'public/icons/icon-60.png', // specifies iOS icons
  'iphone_2x': 'public/icons/icon-60@2x.png',
  'ipad': 'public/icons/icon-72.png',
  'ipad_2x': 'public/icons/icon-72@2x.png'
});

App.launchScreens({
  // iOS
  'iphone': 'public/launchscreen/splash-320x480.png',  // specifies iOS launch screens
  'iphone_2x': 'public/launchscreen/splash-320x480@2x.png',
  'iphone5': 'public/launchscreen/splash-320x568@2x.png',
  'iphone6': 'public/launchscreen/splash-750x1334.png',
  'iphone6p_portrait': 'public/launchscreen/splash-1242x2208.png',
  'iphone6p_landscape': 'public/launchscreen/splash-2208x1242.png',
  'ipad_portrait': 'public/launchscreen/splash-768x1024.png',
  'ipad_portrait_2x': 'public/launchscreen/splash-768x1024@2x.png',
  'ipad_landscape': 'public/launchscreen/splash-1024x768.png',
  'ipad_landscape_2x': 'public/launchscreen/splash-1024x768@2x.png',

  // Android
  'android_ldpi_portrait': 'public/launchscreen/splash-200x320.png', // specifies android launch screens
  'android_ldpi_landscape': 'public/launchscreen/splash-320x200.png',
  'android_mdpi_portrait': 'public/launchscreen/splash-320x480.png',
  'android_mdpi_landscape': 'public/launchscreen/splash-480x320.png',
  'android_hdpi_portrait': 'public/launchscreen/splash-480x800.png',
  'android_hdpi_landscape': 'public/launchscreen/splash-800x480.png',
  'android_xhdpi_portrait': 'public/launchscreen/splash-720x1280.png',
  'android_xhdpi_landscape': 'public/launchscreen/splash-1280x720.png'
});

