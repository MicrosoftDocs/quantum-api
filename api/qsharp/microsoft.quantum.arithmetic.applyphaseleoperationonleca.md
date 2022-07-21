---
uid: Microsoft.Quantum.Arithmetic.ApplyPhaseLEOperationOnLECA
title: ApplyPhaseLEOperationOnLECA operation
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: ApplyPhaseLEOperationOnLECA
qsharp.summary: >-
  Applies an operation that takes a
  <xref:Microsoft.Quantum.Arithmetic.LittleEndian> register as input
  on a target register of type <xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian>.
---

# ApplyPhaseLEOperationOnLECA operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies an operation that takes a<xref:Microsoft.Quantum.Arithmetic.LittleEndian> register as inputon a target register of type <xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian>.

```qsharp
operation ApplyPhaseLEOperationOnLECA (op : (Microsoft.Quantum.Arithmetic.PhaseLittleEndian => Unit is Adj + Ctl), target : Microsoft.Quantum.Arithmetic.LittleEndian) : Unit is Adj + Ctl
```


## Input

### op : [PhaseLittleEndian](xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl

The operation to be applied.


### target : [LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian)

The register to which the operation is applied.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

The register is transformed to `PhaseLittleEndian` by the use of<xref:Microsoft.Quantum.Canon.QFTLE> and is then returned toits original representation after application of `op`.

## See Also

- [Microsoft.Quantum.Arithmetic.ApplyPhaseLEOperationOnLE](xref:Microsoft.Quantum.Arithmetic.ApplyPhaseLEOperationOnLE)
- [Microsoft.Quantum.Arithmetic.ApplyPhaseLEOperationOnLEA](xref:Microsoft.Quantum.Arithmetic.ApplyPhaseLEOperationOnLEA)
- [Microsoft.Quantum.Arithmetic.ApplyPhaseLEOperationOnLEC](xref:Microsoft.Quantum.Arithmetic.ApplyPhaseLEOperationOnLEC)