---
uid: Microsoft.Quantum.Simulation.TestSuite.Math.ExpectedValueForPauli
title: ExpectedValueForPauli function
ms.date: 3/26/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Simulation.TestSuite.Math
qsharp.name: ExpectedValueForPauli
qsharp.summary: Returns the expectation of measuring observable on the qubit in state given by stateId.
---

# ExpectedValueForPauli function

Namespace: [Microsoft.Quantum.Simulation.TestSuite.Math](xref:Microsoft.Quantum.Simulation.TestSuite.Math)

Package: [Tests.Microsoft.Quantum.Simulators](https://nuget.org/packages/Tests.Microsoft.Quantum.Simulators)


Returns the expectation of measuring observable on the qubit in state given by stateId.

```qsharp
function ExpectedValueForPauli (observable : Pauli, stateId : Int) : Double
```


## Input

### observable : [Pauli](xref:microsoft.quantum.lang-ref.pauli)




### stateId : [Int](xref:microsoft.quantum.lang-ref.int)





## Output : [Double](xref:microsoft.quantum.lang-ref.double)



## Remarks

The correspondence betweenvalue of stateId and the qubit state is the following:0 -- |0⟩1 -- |1⟩2 -- |+⟩3 -- |i⟩ ( +1 eigenstate of Pauli Y )