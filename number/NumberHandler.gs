package edge.capabilities.number

uses edge.capabilities.number.dto.InputReqDTO
uses edge.capabilities.number.dto.ResponseDTO
uses edge.jsonrpc.AbstractRpcHandler
uses edge.di.annotations.InjectableNode
uses edge.jsonrpc.annotation.JsonRpcUnauthenticatedMethod


class NumberHandler extends AbstractRpcHandler {
  private var _primePlugin: IPrimeNumberPlugin
  private var _converterPlugin: INumberFormatConverter
  @InjectableNode
  construct(primePlugin: IPrimeNumberPlugin,
            converterPlugin: INumberFormatConverter) {
    _primePlugin = primePlugin
    _converterPlugin = converterPlugin
  }

  @JsonRpcUnauthenticatedMethod
  public function checkIsPrime(dto: InputReqDTO): ResponseDTO {
    var result = _primePlugin.isPrime(dto.Number)
    var resp = new ResponseDTO(){
     : IsPrime = result

    }
    return resp
  }


  @JsonRpcUnauthenticatedMethod
  public function convert(dto: InputReqDTO): ResponseDTO {
    var result = _converterPlugin.convert(dto.Number)
    var resp = new ResponseDTO(){
        :  FormattedNumber =  result
    }
    return resp
  }
}
