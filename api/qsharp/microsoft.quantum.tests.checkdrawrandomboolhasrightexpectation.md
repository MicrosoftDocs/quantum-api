---
uid: Microsoft.Quantum.Tests.CheckDrawRandomBoolHasRightExpectation
title: CheckDrawRandomBoolHasRightExpectation operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Tests
qsharp.name: CheckDrawRandomBoolHasRightExpectation
qsharp.summary: >-
  Checks that @"microsoft.quantum.random.drawrandombool" has the right
  first moment. Note that since DrawRandomBool represents a Bernoulli
  trial, it is entirely characterized by its first moment; we don't need
  to check variance here.
---

# CheckDrawRandomBoolHasRightExpectation operation

Namespace: [Microsoft.Quantum.Tests](xref:Microsoft.Quantum.Tests)

Package: [IntrinsicTests](https://nuget.org/packages/IntrinsicTests)


Checks that @"microsoft.quantum.random.drawrandombool" has the rightfirst moment. Note that since DrawRandomBool represents a Bernoullitrial, it is entirely characterized by its first moment; we don't needto check variance here.

```qsharp
operation CheckDrawRandomBoolHasRightExpectation () : Unit
```


## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

