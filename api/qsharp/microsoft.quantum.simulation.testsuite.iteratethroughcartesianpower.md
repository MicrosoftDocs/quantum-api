---
uid: Microsoft.Quantum.Simulation.TestSuite.IterateThroughCartesianPower
title: IterateThroughCartesianPower operation
ms.date: 3/26/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.TestSuite
qsharp.name: IterateThroughCartesianPower
qsharp.summary: >-
  Iterates a variable, say arr, through cartesian product
  [ 0, bound - 1 ] × [ 0, bound - 1 ] × [ 0, bound - 1 ]
  and calls op(arr) for every element of the cartesian product
---

# IterateThroughCartesianPower operation

Namespace: [Microsoft.Quantum.Simulation.TestSuite](xref:Microsoft.Quantum.Simulation.TestSuite)

Package: [Tests.Microsoft.Quantum.Simulators](https://nuget.org/packages/Tests.Microsoft.Quantum.Simulators)


Iterates a variable, say arr, through cartesian product[ 0, bound - 1 ] × [ 0, bound - 1 ] × [ 0, bound - 1 ]and calls op(arr) for every element of the cartesian product

```qsharp
operation IterateThroughCartesianPower (power : Int, bound : Int, op : (Int[] => Unit)) : Unit
```


## Input

### power : [Int](xref:microsoft.quantum.lang-ref.int)




### bound : [Int](xref:microsoft.quantum.lang-ref.int)




### op : [Int](xref:microsoft.quantum.lang-ref.int)[] => [Unit](xref:microsoft.quantum.lang-ref.unit) 





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

