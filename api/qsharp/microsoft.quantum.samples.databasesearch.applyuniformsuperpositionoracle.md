---
uid: Microsoft.Quantum.Samples.DatabaseSearch.ApplyUniformSuperpositionOracle
title: ApplyUniformSuperpositionOracle operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.DatabaseSearch
qsharp.name: ApplyUniformSuperpositionOracle
qsharp.summary: >-
  Given a register of qubits initially in the state |00…0〉, prepares
  a uniform superposition over all computational basis states.
---

# ApplyUniformSuperpositionOracle operation

Namespace: [Microsoft.Quantum.Samples.DatabaseSearch](xref:Microsoft.Quantum.Samples.DatabaseSearch)

Package: [DatabaseSearchSample](https://nuget.org/packages/DatabaseSearchSample)


Given a register of qubits initially in the state |00…0〉, preparesa uniform superposition over all computational basis states.

```qsharp
operation ApplyUniformSuperpositionOracle (databaseRegister : Qubit[]) : Unit is Adj + Ctl
```


## Input

### databaseRegister : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

A register of n qubits initially in the |00…0〉 state.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

