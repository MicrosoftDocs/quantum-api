---
uid: Microsoft.Quantum.Oracles.ReflectionOracle
title: ReflectionOracle user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Oracles
qsharp.name: ReflectionOracle
qsharp.summary: Represents a reflection oracle.
---

# ReflectionOracle user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Oracles](xref:Microsoft.Quantum.Oracles)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents a reflection oracle.

```qsharp

newtype ReflectionOracle = (ApplyReflection : ((Double, Qubit[]) => Unit is Adj + Ctl));
```



## Named Items

### ApplyReflection : ([Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals),[Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl

A reflection oracle, $O$, implemented by an operation with inputs:- The phase $\phi$ by which to rotate the reflected subspace.- The qubit register on which to perform the given reflection.

## Remarks

This oracle $O = \boldone - (1 - e^{i \phi}) \ket{\psi}\bra{\psi}$performs a partial reflection by a phase $\phi$ about a single pure state$\ket{\psi}$.