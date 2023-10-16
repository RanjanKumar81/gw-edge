package edge.capabilities.number.dto

uses edge.jsonmapper.JsonProperty

class ResponseDTO {

  @JsonProperty
  private var _isPrime: Boolean as IsPrime

  @JsonProperty
  private var _formattedNumber: String as FormattedNumber
}
