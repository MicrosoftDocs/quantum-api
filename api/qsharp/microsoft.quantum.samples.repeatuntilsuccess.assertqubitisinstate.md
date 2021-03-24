---
uid: Microsoft.Quantum.Samples.RepeatUntilSuccess.AssertQubitIsInState
title: AssertQubitIsInState operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.RepeatUntilSuccess
qsharp.name: AssertQubitIsInState
qsharp.summary: >-
  Assert target qubit state is the desired input value in the desired
  input basis.

  ## target

  Target qubit

  ## inputBasis

  Pauli basis in which to prepare input qubit

  ## inputValue

  Boolean value for input qubit (true maps to One, false maps to Zero)
---

# AssertQubitIsInState operation

Namespace: [Microsoft.Quantum.Samples.RepeatUntilSuccess](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess)

Package: [RepeatUntilSuccess](https://nuget.org/packages/RepeatUntilSuccess)


Assert target qubit state is the desired input value in the desiredinput basis.## targetTarget qubit## inputBasisPauli basis in which to prepare input qubit## inputValueBoolean value for input qubit (true maps to One, false maps to Zero)

```qsharp
operation AssertQubitIsInState (target : Qubit, inputBasis : Pauli, inputValue : Bool) : Unit
```


## Input

### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### inputBasis : [Pauli](xref:microsoft.quantum.lang-ref.pauli)




### inputValue : [Bool](xref:microsoft.quantum.lang-ref.bool)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

