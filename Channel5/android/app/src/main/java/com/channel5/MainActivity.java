package com.channel5;

import com.facebook.react.ReactActivity;
import android.content.Intent; // <--- import
import android.content.res.Configuration; // <--- import
import android.os.Bundle;
import com.cboy.rn.splashscreen.SplashScreen;
import com.cboy.rn.splashscreen.SplashScreenReactPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Channel5";
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        Intent intent = new Intent("onConfigurationChanged");
        intent.putExtra("newConfig", newConfig);
        this.sendBroadcast(intent);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // 添加这一句
        super.onCreate(savedInstanceState);
    }
}
