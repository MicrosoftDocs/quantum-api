---
uid: Microsoft.Quantum.Samples.RepeatUntilSuccess.CreateQubitsAndApplySimpleGate
title: CreateQubitsAndApplySimpleGate operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.RepeatUntilSuccess
qsharp.name: CreateQubitsAndApplySimpleGate
qsharp.summary: >-
  Example of a Repeat-until-success algorithm implementing a circuit
  that achieves (I + i√2X)/√3 by Paetznick & Svore. This is the smallest
  circuit found in the referenced work and described in figure 8.
---

# CreateQubitsAndApplySimpleGate operation

Namespace: [Microsoft.Quantum.Samples.RepeatUntilSuccess](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess)

Package: [RepeatUntilSuccess](https://nuget.org/packages/RepeatUntilSuccess)


Example of a Repeat-until-success algorithm implementing a circuitthat achieves (I + i√2X)/√3 by Paetznick & Svore. This is the smallestcircuit found in the referenced work and described in figure 8.

```qsharp
operation CreateQubitsAndApplySimpleGate (inputValue : Bool, inputBasis : Pauli, limit : Int) : (Bool, Result, Int)
```


## Input

### inputValue : [Bool](xref:microsoft.quantum.lang-ref.bool)

Boolean value for input qubit (true maps to One, false maps to Zero)


### inputBasis : [Pauli](xref:microsoft.quantum.lang-ref.pauli)

Pauli basis in which to prepare input qubit


### limit : [Int](xref:microsoft.quantum.lang-ref.int)

Integer limit to number of repeats of circuit



## Output : ([Bool](xref:microsoft.quantum.lang-ref.bool),__invalid<Result>__,[Int](xref:microsoft.quantum.lang-ref.int))



## Remarks

The program executes a circuit on a "target" qubit using an "auxiliary"qubit.The goal is to measure Zero for the auxiliary qubit.If this succeeds, the program will have effectively applied an(I + i√2X)/√3 gate on the target qubit.If this fails, the program reruns the circuit up to <limit> times.

## References

- [ *Adam Paetznick, Krysta M. Svore*,  Quantum Information & Computation 14(15 & 16): 1277-1301 (2014)  ](https://arxiv.org/abs/1311.1074)  For circuit diagram, see file SimpleRUS.png.