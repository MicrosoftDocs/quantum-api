---
uid: Microsoft.Quantum.Chemistry.JordanWigner._ApplyJordanWignerPQTerm_
title: _ApplyJordanWignerPQTerm_ operation
ms.date: 1/20/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Chemistry.JordanWigner
qsharp.name: _ApplyJordanWignerPQTerm_
qsharp.summary: Applies time-evolution by a PQ term described by a `GeneratorIndex`.
---

# _ApplyJordanWignerPQTerm_ operation

Namespace: [Microsoft.Quantum.Chemistry.JordanWigner](xref:Microsoft.Quantum.Chemistry.JordanWigner)

Package: [Microsoft.Quantum.Chemistry](https://nuget.org/packages/Microsoft.Quantum.Chemistry)


Applies time-evolution by a PQ term described by a `GeneratorIndex`.

```qsharp
operation _ApplyJordanWignerPQTerm_ (term : Microsoft.Quantum.Simulation.GeneratorIndex, stepSize : Double, extraParityQubits : Qubit[], qubits : Qubit[]) : Unit is Adj + Ctl
```


## Input

### term : [GeneratorIndex](xref:Microsoft.Quantum.Simulation.GeneratorIndex)

`GeneratorIndex` representing a PQ term.


### stepSize : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

Duration of time-evolution.


### extraParityQubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Optional parity qubits that flip the sign of time-evolution.


### qubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Qubits of Hamiltonian.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

