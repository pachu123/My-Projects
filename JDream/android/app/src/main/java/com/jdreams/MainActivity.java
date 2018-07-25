package com.jdreams;

import com.reactnativenavigation.controllers.SplashActivity;
import android.widget.LinearLayout;
import android.graphics.Color;
import android.view.Gravity;
import android.util.TypedValue;
import android.widget.TextView;
import android.widget.ImageView;




 public class MainActivity extends SplashActivity {
  public LinearLayout createSplashLayout(){
   LinearLayout view = new LinearLayout(this);
   TextView text = new TextView(this);
   final ImageView imageView = new ImageView(this);

   view.setBackgroundColor(Color.parseColor("#ffffff"));
   view.setGravity(Gravity.CENTER);


   imageView.setImageResource(R.drawable.jdream);
   imageView.setMaxWidth(100);
   view.addView(imageView);
   return view;
  }


}


