import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {

stable var startTime = Time.now();
Debug.print(debug_show(startTime));
  
 stable var currentValue : Float = 300;

  // currentValue := 100

  let id = 38599503;

  Debug.print(debug_show(currentValue));
  Debug.print(debug_show(id));

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
    }

   
  };

  public query  func checkBal() : async Float {
    return currentValue;
  };

  public func compound() {

    let currentTime = Time.now();
    let timeElapsed = currentTime - startTime;
    let timeElapsedInSeconds = timeElapsed / 1000000000;

    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedInSeconds));

    startTime := currentTime;

  }


}
