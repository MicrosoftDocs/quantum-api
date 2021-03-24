---
uid: Microsoft.Quantum.Samples.H2Simulation._H2TrotterUnitaries
title: _H2TrotterUnitaries operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.H2Simulation
qsharp.name: _H2TrotterUnitaries
qsharp.summary: >-
  Given the index of bond length, the index of a term in the
  corresponding Hamiltonian, and a step size, applies the given
  term to a register of qubits for that step size.
---

# _H2TrotterUnitaries operation

Namespace: [Microsoft.Quantum.Samples.H2Simulation](xref:Microsoft.Quantum.Samples.H2Simulation)

Package: [H2SimulationSampleCmdLine](https://nuget.org/packages/H2SimulationSampleCmdLine)


Given the index of bond length, the index of a term in thecorresponding Hamiltonian, and a step size, applies the giventerm to a register of qubits for that step size.

```qsharp
operation _H2TrotterUnitaries (idxBondLength : Int, idxHamiltonian : Int, stepSize : Double, qubits : Qubit[]) : Unit is Adj + Ctl
```


## Input

### idxBondLength : [Int](xref:microsoft.quantum.lang-ref.int)




### idxHamiltonian : [Int](xref:microsoft.quantum.lang-ref.int)




### stepSize : [Double](xref:microsoft.quantum.lang-ref.double)




### qubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

This operation uses the common idiom of using a leading underscore todenote a private operation. Here, that private operation lets us exposea user-facing API in terms of functions (no side effects).