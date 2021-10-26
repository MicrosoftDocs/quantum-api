---
uid: Microsoft.Quantum.Arithmetic.ApplyLEOperationOnPhaseLEA
title: ApplyLEOperationOnPhaseLEA operation
ms.date: 10/22/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: ApplyLEOperationOnPhaseLEA
qsharp.summary: >-
  Applies an operation that takes a
  <xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian> register as input
  on a target register of type <xref:Microsoft.Quantum.Arithmetic.LittleEndian>.
---

# ApplyLEOperationOnPhaseLEA operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies an operation that takes a<xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian> register as inputon a target register of type <xref:Microsoft.Quantum.Arithmetic.LittleEndian>.

```qsharp
operation ApplyLEOperationOnPhaseLEA (op : (Microsoft.Quantum.Arithmetic.LittleEndian => Unit is Adj), target : Microsoft.Quantum.Arithmetic.PhaseLittleEndian) : Unit is Adj
```


## Input

### op : [LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj

The operation to be applied.


### target : [PhaseLittleEndian](xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian)

The register to which the operation is applied.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

The register is transformed to `LittleEndian` by the use of<xref:Microsoft.Quantum.Canon.QFTLE> and is then returned toits original representation after application of `op`.

## See Also

- [Microsoft.Quantum.Arithmetic.ApplyLEOperationonPhaseLE](xref:Microsoft.Quantum.Arithmetic.ApplyLEOperationonPhaseLE)
- [Microsoft.Quantum.Arithmetic.ApplyLEOperationonPhaseLEC](xref:Microsoft.Quantum.Arithmetic.ApplyLEOperationonPhaseLEC)
- [Microsoft.Quantum.Arithmetic.ApplyLEOperationonPhaseLECA](xref:Microsoft.Quantum.Arithmetic.ApplyLEOperationonPhaseLECA)