---
uid: Microsoft.Quantum.Tests.TestKD
title: TestKD operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Tests
qsharp.name: TestKD
qsharp.summary: >-
  Tests if the distillation routine works as intended.
  This protocol is supposed to catch any weight 2 errors
  on the input magic states, assuming perfect Cliffords.
  Here we do not attempt to correct detected errors,
  since corrections would make the output magic state
  less accurate, compared to post-selection on zero syndrome.
---

# TestKD operation

Namespace: [Microsoft.Quantum.Tests](xref:Microsoft.Quantum.Tests)

Package: [Microsoft.Quantum.Standard.Tests](https://nuget.org/packages/Microsoft.Quantum.Standard.Tests)


Tests if the distillation routine works as intended.This protocol is supposed to catch any weight 2 errorson the input magic states, assuming perfect Cliffords.Here we do not attempt to correct detected errors,since corrections would make the output magic stateless accurate, compared to post-selection on zero syndrome.

```qsharp
operation TestKD () : Unit
```


## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

