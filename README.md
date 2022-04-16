# An Demo RN app for animated Splash Screen

Clone and enjoy!! ☺️

## How does it work:

- I've used a fork of [react-native-splash-screen](git+https://github.com/kirillpisarev/react-native-splash-screen)
- Create a `launch_screen.xml` file in `res` and add your images here.
- Create a `anim` folder for your animation in `res` and add your animation there.
- In the `MainActivity.java`, add this:

```
import android.os.Bundle; // here
import com.facebook.react.ReactActivity;
// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; // here
// react-native-splash-screen < 0.3.1
import com.cboy.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {
   @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
    // ...other code
}
```

- On the js side, add this:

```
SplashScreen.hide();
```
