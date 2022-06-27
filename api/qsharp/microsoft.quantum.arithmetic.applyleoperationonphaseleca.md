---
uid: Microsoft.Quantum.Arithmetic.ApplyLEOperationOnPhaseLECA
title: ApplyLEOperationOnPhaseLECA operation
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: ApplyLEOperationOnPhaseLECA
qsharp.summary: >-
  Applies an operation that takes a
  <xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian> register as input
  on a target register of type <xref:Microsoft.Quantum.Arithmetic.LittleEndian>.
---

# ApplyLEOperationOnPhaseLECA operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies an operation that takes a<xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian> register as inputon a target register of type <xref:Microsoft.Quantum.Arithmetic.LittleEndian>.

```qsharp
operation ApplyLEOperationOnPhaseLECA (op : (Microsoft.Quantum.Arithmetic.LittleEndian => Unit is Adj + Ctl), target : Microsoft.Quantum.Arithmetic.PhaseLittleEndian) : Unit is Adj + Ctl
```


## Input

### op : [LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl

The operation to be applied.


### target : [PhaseLittleEndian](xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian)

The register to which the operation is applied.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

The register is transformed to `LittleEndian` by the use of<xref:Microsoft.Quantum.Canon.QFTLE> and is then returned toits original representation after application of `op`.

## See Also

- [Microsoft.Quantum.Arithmetic.ApplyLEOperationOnPhaseLE](xref:Microsoft.Quantum.Arithmetic.ApplyLEOperationOnPhaseLE)
- [Microsoft.Quantum.Arithmetic.ApplyLEOperationOnPhaseLEA](xref:Microsoft.Quantum.Arithmetic.ApplyLEOperationOnPhaseLEA)
- [Microsoft.Quantum.Arithmetic.ApplyLEOperationOnPhaseLEC](xref:Microsoft.Quantum.Arithmetic.ApplyLEOperationOnPhaseLEC)