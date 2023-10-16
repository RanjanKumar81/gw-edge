package edge.capabilities.number

uses edge.di.annotations.ForAllNodes

class BinaryConverter implements INumberFormatConverter {

  @ForAllNodes
  public construct(){}

  override function convert(number : Integer) : String {
    return decimalToBinary(number)
  }

  public function decimalToBinary(n : Integer) : String {
    var remainder = n
    var quotient = n;
    var binaryNum = "";
    while (quotient > 0) {
      remainder = quotient % 2;
      binaryNum
          = Integer.toString(remainder) + binaryNum;
      quotient = quotient / 2;
    }
    return binaryNum;
  }
}