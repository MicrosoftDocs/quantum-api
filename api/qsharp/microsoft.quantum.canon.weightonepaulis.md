---
uid: Microsoft.Quantum.Canon.WeightOnePaulis
title: WeightOnePaulis function
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: WeightOnePaulis
qsharp.summary: >-
  Returns an array of all weight-1 Pauli operators
  on a given number of qubits.
---

# WeightOnePaulis function

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns an array of all weight-1 Pauli operatorson a given number of qubits.

```qsharp
function WeightOnePaulis (nQubits : Int) : Pauli[][]
```


## Input

### nQubits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number of qubits on which the returned Pauli operatorsare defined.



## Output : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)[][]

An array of multi-qubit Pauli operators, each of which isrepresented as an array with length `nQubits`.