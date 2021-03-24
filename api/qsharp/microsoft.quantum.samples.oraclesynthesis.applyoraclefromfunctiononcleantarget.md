---
uid: Microsoft.Quantum.Samples.OracleSynthesis.ApplyOracleFromFunctionOnCleanTarget
title: ApplyOracleFromFunctionOnCleanTarget operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.OracleSynthesis
qsharp.name: ApplyOracleFromFunctionOnCleanTarget
qsharp.summary: >-
  Implements oracle circuit for a given function, assuming that target qubit
  is initialized 0.  The adjoint operation assumes that the target
  qubit will be released to 0.
---

# ApplyOracleFromFunctionOnCleanTarget operation

Namespace: [Microsoft.Quantum.Samples.OracleSynthesis](xref:Microsoft.Quantum.Samples.OracleSynthesis)

Package: [OracleSynthesis](https://nuget.org/packages/OracleSynthesis)


Implements oracle circuit for a given function, assuming that target qubitis initialized 0.  The adjoint operation assumes that the targetqubit will be released to 0.

```qsharp
operation ApplyOracleFromFunctionOnCleanTarget (func : Bool[], controls : Qubit[], target : Qubit) : Unit is Adj
```


## Input

### func : [Bool](xref:microsoft.quantum.lang-ref.bool)[]

Oracle function in truth table representation


### controls : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Control qubits


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Target qubit



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

