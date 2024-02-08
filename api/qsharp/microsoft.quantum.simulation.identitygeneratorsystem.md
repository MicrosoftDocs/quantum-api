---
uid: Microsoft.Quantum.Simulation.IdentityGeneratorSystem
title: IdentityGeneratorSystem function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Simulation
qsharp.name: IdentityGeneratorSystem
qsharp.summary: >-
  Returns a generator system consistent with the zero
  Hamiltonian `H = 0`, which corresponds to the identity evolution operation.
---

# IdentityGeneratorSystem function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Simulation](xref:Microsoft.Quantum.Simulation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns a generator system consistent with the zeroHamiltonian `H = 0`, which corresponds to the identity evolution operation.

```qsharp
function IdentityGeneratorSystem () : Microsoft.Quantum.Simulation.GeneratorSystem
```


## Output : [GeneratorSystem](xref:Microsoft.Quantum.Simulation.GeneratorSystem)

A generator system representing evolution under the Hamiltonian$H = 0$.