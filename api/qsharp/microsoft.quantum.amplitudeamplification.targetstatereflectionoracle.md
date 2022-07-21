---
uid: Microsoft.Quantum.AmplitudeAmplification.TargetStateReflectionOracle
title: TargetStateReflectionOracle function
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.AmplitudeAmplification
qsharp.name: TargetStateReflectionOracle
qsharp.summary: Constructs a `ReflectionOracle` about the target state uniquely marked by the flag qubit.
---

# TargetStateReflectionOracle function

Namespace: [Microsoft.Quantum.AmplitudeAmplification](xref:Microsoft.Quantum.AmplitudeAmplification)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Constructs a `ReflectionOracle` about the target state uniquely marked by the flag qubit.

```qsharp
function TargetStateReflectionOracle (idxFlagQubit : Int) : Microsoft.Quantum.Oracles.ReflectionOracle
```


## Description

The oracle returned by this function reflects about the $\ket{1}$ stateof a flag qubit (given by the index `idxFlagQubit`).

## Input

### idxFlagQubit : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Index to flag qubit $f$ of oracle.



## Output : [ReflectionOracle](xref:Microsoft.Quantum.Oracles.ReflectionOracle)

A `ReflectionOracle` that reflects about the state marked by $\ket{1}_f$.

## See Also

- [Microsoft.Quantum.Canon.ReflectionOracle](xref:Microsoft.Quantum.Canon.ReflectionOracle)