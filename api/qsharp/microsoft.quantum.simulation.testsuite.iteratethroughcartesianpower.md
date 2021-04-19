---
uid: Microsoft.Quantum.Simulation.TestSuite.IterateThroughCartesianPower
title: IterateThroughCartesianPower operation
ms.date: 4/19/2021 12:00:00 AM
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

### power : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)




### bound : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)




### op : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)[] => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal) 





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

