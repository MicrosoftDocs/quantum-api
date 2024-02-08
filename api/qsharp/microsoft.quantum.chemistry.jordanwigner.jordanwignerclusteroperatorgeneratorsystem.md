---
uid: Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerClusterOperatorGeneratorSystem
title: JordanWignerClusterOperatorGeneratorSystem function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Chemistry.JordanWigner
qsharp.name: JordanWignerClusterOperatorGeneratorSystem
qsharp.summary: >-
  Converts a Hamiltonian described by `JWOptimizedHTerms`
  to a `GeneratorSystem` expressed in terms of the
  `GeneratorIndex` convention defined in this file.
---

# JordanWignerClusterOperatorGeneratorSystem function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Chemistry.JordanWigner](xref:Microsoft.Quantum.Chemistry.JordanWigner)

Package: [Microsoft.Quantum.Chemistry](https://nuget.org/packages/Microsoft.Quantum.Chemistry)


Converts a Hamiltonian described by `JWOptimizedHTerms`to a `GeneratorSystem` expressed in terms of the`GeneratorIndex` convention defined in this file.

```qsharp
function JordanWignerClusterOperatorGeneratorSystem (data : Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerInputState[]) : Microsoft.Quantum.Simulation.GeneratorSystem
```


## Input

### data : [JordanWignerInputState](xref:Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerInputState)[]

Description of Hamiltonian in `JWOptimizedHTerms` format.



## Output : [GeneratorSystem](xref:Microsoft.Quantum.Simulation.GeneratorSystem)

Representation of Hamiltonian as `GeneratorSystem`.