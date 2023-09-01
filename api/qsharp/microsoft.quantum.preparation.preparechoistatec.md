---
uid: Microsoft.Quantum.Preparation.PrepareChoiStateC
title: PrepareChoiStateC operation
ms.date: 09/01/2023
ms.topic: managed-reference
ms.author: quantumdocwriters
description: >-
  Prepares the Choi–Jamiołkowski state for a given operation with a controlled variant onto given reference
  and target registers.
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Preparation
qsharp.name: PrepareChoiStateC
qsharp.summary: >-
  Prepares the Choi–Jamiołkowski state for a given operation with a controlled variant onto given reference
  and target registers.
---

# PrepareChoiStateC operation

Namespace: [Microsoft.Quantum.Preparation](xref:Microsoft.Quantum.Preparation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Prepares the Choi–Jamiołkowski state for a given operation with a controlled variant onto given referenceand target registers.

```qsharp
operation PrepareChoiStateC (op : (Qubit[] => Unit is Ctl), reference : Qubit[], target : Qubit[]) : Unit is Ctl
```


## Input

### op : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[] => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Ctl




### reference : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]




### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## See Also

- [Microsoft.Quantum.Preparation.PrepareChoiState](xref:Microsoft.Quantum.Preparation.PrepareChoiState)