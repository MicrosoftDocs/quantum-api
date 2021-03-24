---
uid: Microsoft.Quantum.Samples.ReflectAboutMarked
title: ReflectAboutMarked operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples
qsharp.name: ReflectAboutMarked
qsharp.summary: >-
  Reflects about the basis state marked by a given index.
  This operation defines what input we are trying to find in the main
  search.
---

# ReflectAboutMarked operation

Namespace: [Microsoft.Quantum.Samples](xref:Microsoft.Quantum.Samples)

Package: [Grover](https://nuget.org/packages/Grover)


Reflects about the basis state marked by a given index.This operation defines what input we are trying to find in the mainsearch.

```qsharp
operation ReflectAboutMarked (idxMarked : Int, inputQubits : Qubit[]) : Unit
```


## Input

### idxMarked : [Int](xref:microsoft.quantum.lang-ref.int)

The index of the marked item to be reflected about.


### inputQubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

The register whose state is to be reflected about the marked input.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

