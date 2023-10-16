package edge.capabilities.number.dto

uses java.lang.Integer
uses edge.jsonmapper.JsonProperty
uses edge.aspects.validation.annotations.Required
uses edge.aspects.validation.annotations.Range

class InputReqDTO {

  @JsonProperty
  @Required
  @Range(2, 99)
  private var _number: Integer as Number
}
