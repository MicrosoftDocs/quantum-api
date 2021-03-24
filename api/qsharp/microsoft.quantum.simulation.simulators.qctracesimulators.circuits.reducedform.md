---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ReducedForm
title: ReducedForm function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: ReducedForm
qsharp.summary: >-
  returns fraction j/2ᵐ represented as tuple (j,m) equal to k/2ⁿ such that j is odd
  when k is 0, returns (0,0)
---

# ReducedForm function

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


returns fraction j/2ᵐ represented as tuple (j,m) equal to k/2ⁿ such that j is oddwhen k is 0, returns (0,0)

```qsharp
function ReducedForm (numerator : Int, power : Int) : (Int, Int)
```


## Input

### numerator : [Int](xref:microsoft.quantum.lang-ref.int)

k


### power : [Int](xref:microsoft.quantum.lang-ref.int)

n



## Output : ([Int](xref:microsoft.quantum.lang-ref.int),[Int](xref:microsoft.quantum.lang-ref.int))

