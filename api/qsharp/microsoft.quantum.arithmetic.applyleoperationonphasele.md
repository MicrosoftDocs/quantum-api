---
uid: Microsoft.Quantum.Arithmetic.ApplyLEOperationOnPhaseLE
title: ApplyLEOperationOnPhaseLE operation
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: ApplyLEOperationOnPhaseLE
qsharp.summary: >-
  Applies an operation that takes a
  <xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian> register as input
  on a target register of type <xref:Microsoft.Quantum.Arithmetic.LittleEndian>.
---

# ApplyLEOperationOnPhaseLE operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies an operation that takes a<xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian> register as inputon a target register of type <xref:Microsoft.Quantum.Arithmetic.LittleEndian>.

```qsharp
operation ApplyLEOperationOnPhaseLE (op : (Microsoft.Quantum.Arithmetic.LittleEndian => Unit), target : Microsoft.Quantum.Arithmetic.PhaseLittleEndian) : Unit
```


## Input

### op : [LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal) 

The operation to be applied.


### target : [PhaseLittleEndian](xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian)

The register to which the operation is applied.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

The register is transformed to `LittleEndian` by the use of<xref:Microsoft.Quantum.Canon.QFTLE> and is then returned toits original representation after application of `op`.

## See Also

- [Microsoft.Quantum.Canon.ApplyLEOperationOnPhaseLEA](xref:Microsoft.Quantum.Canon.ApplyLEOperationOnPhaseLEA)
- [Microsoft.Quantum.Canon.ApplyLEOperationOnPhaseLEC](xref:Microsoft.Quantum.Canon.ApplyLEOperationOnPhaseLEC)
- [Microsoft.Quantum.Canon.ApplyLEOperationOnPhaseLECA](xref:Microsoft.Quantum.Canon.ApplyLEOperationOnPhaseLECA)