---
uid: Microsoft.Quantum.Intrinsic.AsRCczTClifford.ApplyWithOneLessControlA
title: ApplyWithOneLessControlA operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic.AsRCczTClifford
qsharp.name: ApplyWithOneLessControlA
qsharp.summary: ''
---

# ApplyWithOneLessControlA operation

Namespace: [Microsoft.Quantum.Intrinsic.AsRCczTClifford](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford)

Package: [FaultTolerantDecompositionsTests](https://nuget.org/packages/FaultTolerantDecompositionsTests)




```qsharp
operation ApplyWithOneLessControlA<'T> (op : ((Qubit[], 'T) => Unit is Adj), (controls : Qubit[], arg : 'T)) : Unit is Adj
```


## Input

### op : ([Qubit](xref:microsoft.quantum.lang-ref.qubit)[],'T) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj




### controls : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]




### arg : 'T





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Type Parameters

### 'T



## References

- [arXiv:1709.06648](https://arxiv.org/pdf/1709.06648.pdf)