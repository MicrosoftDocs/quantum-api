---
uid: Microsoft.Quantum.Samples.RepeatUntilSuccess.RunProgram
title: RunProgram operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.RepeatUntilSuccess
qsharp.name: RunProgram
qsharp.summary: >-
  Example of a Repeat-until-success algorithm implementing a circuit
  decomposition by Paetznick & Svore.
---

# RunProgram operation

Namespace: [Microsoft.Quantum.Samples.RepeatUntilSuccess](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess)

Package: [RepeatUntilSuccess](https://nuget.org/packages/RepeatUntilSuccess)


Example of a Repeat-until-success algorithm implementing a circuitdecomposition by Paetznick & Svore.

```qsharp
operation RunProgram (gate : String, inputValue : Bool, inputBasis : Pauli, limit : Int, numRuns : Int) : Unit
```


## Input

### gate : [String](xref:microsoft.quantum.lang-ref.string)

Gate circuit to run ("simple" or "V")


### inputValue : [Bool](xref:microsoft.quantum.lang-ref.bool)

Boolean value for input qubit (true maps to One, false maps to Zero)


### inputBasis : [Pauli](xref:microsoft.quantum.lang-ref.pauli)

Pauli basis in which to prepare input qubit


### limit : [Int](xref:microsoft.quantum.lang-ref.int)

Integer limit to number of repeats of circuit


### numRuns : [Int](xref:microsoft.quantum.lang-ref.int)

Number of times to run the circuit



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

The program executes a circuit on a "target" qubit using an "auxiliary"qubit.The goal is to measure Zero for the auxiliary qubit.If this succeeds, the program will have effectively applied an(I + i√2X)/√3 gate on the target qubit.If this fails, the program reruns the circuit up to <limit> times.

## References

- [ *Adam Paetznick, Krysta M. Svore*,  Quantum Information & Computation 14(15 & 16): 1277-1301 (2014)  ](https://arxiv.org/abs/1311.1074)