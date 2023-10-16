package edge.capabilities.number

uses java.lang.Integer
uses edge.di.annotations.ForAllNodes
uses edge.di.annotations.InjectableNode


class DecimalFormatConverter implements INumberFormatConverter {

  @InjectableNode
  construct()   {}
  override function convert(number: Integer): String {
    return number.toString()
  }
}
