---
uid: Microsoft.Quantum.Samples.NIterations
title: NIterations function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples
qsharp.name: NIterations
qsharp.summary: >-
  Returns the number of Grover iterations needed to find a single marked
  item, given the number of qubits in a register.
---

# NIterations function

Namespace: [Microsoft.Quantum.Samples](xref:Microsoft.Quantum.Samples)

Package: [Grover](https://nuget.org/packages/Grover)


Returns the number of Grover iterations needed to find a single markeditem, given the number of qubits in a register.

```qsharp
function NIterations (nQubits : Int) : Int
```


## Input

### nQubits : [Int](xref:microsoft.quantum.lang-ref.int)

The number of qubits in the register to be searched over.



## Output : [Int](xref:microsoft.quantum.lang-ref.int)

The optimal number of Grover's iterations to use for a register ofsize `nQubits`.