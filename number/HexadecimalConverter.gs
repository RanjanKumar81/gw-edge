package edge.capabilities.number

uses java.lang.Integer
uses edge.di.annotations.ForAllNodes
uses edge.di.annotations.InjectableNode

class HexadecimalConverter implements INumberFormatConverter {
  @InjectableNode
  construct(){}
  override function convert(number: Integer): String {
    return Integer.toHexString(number)
  }
}
