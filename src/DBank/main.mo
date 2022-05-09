import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {

 stable var startTime = Time.now();

 stable var currentValue : Float = 300;


  public func topUp(amount:Float) {

    currentValue += amount;

    Debug.print(debug_show(currentValue));

  };

  // topUp();

  public func withdraw(amount:Float) {

    if (currentValue >= amount){

    currentValue -= amount;

    Debug.print(debug_show(currentValue));

    }else{
      Debug.print("Insufficient Bal");
      // Debug.print("Maximum withrawable = " + debug_show(currentValue));
    }

   
  };

  public query  func checkBal() : async Float {
    return currentValue;
  };

  public func compound() {

    let currentTime = Time.now();
    let timeElapsed = currentTime - startTime;
    let timeElapsedInSeconds = timeElapsed / 100000000000;

    currentValue := currentValue * (1.00001 ** Float.fromInt(timeElapsedInSeconds));

    startTime := currentTime;

  }


}
