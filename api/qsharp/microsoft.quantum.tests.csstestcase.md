---
uid: Microsoft.Quantum.Tests.CSSTestCase
title: CSSTestCase function
ms.date: 3/26/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Tests
qsharp.name: CSSTestCase
qsharp.summary: ''
---

# CSSTestCase function

Namespace: [Microsoft.Quantum.Tests](xref:Microsoft.Quantum.Tests)

Package: [Microsoft.Quantum.Standard.Tests](https://nuget.org/packages/Microsoft.Quantum.Standard.Tests)




```qsharp
function CSSTestCase (code : Microsoft.Quantum.ErrorCorrection.CSS, nScratch : Int, fnX : Microsoft.Quantum.ErrorCorrection.RecoveryFn, fnZ : Microsoft.Quantum.ErrorCorrection.RecoveryFn, error : (Qubit[] => Unit)) : (Qubit[] => Unit)
```


## Input

### code : [CSS](xref:Microsoft.Quantum.ErrorCorrection.CSS)




### nScratch : [Int](xref:microsoft.quantum.lang-ref.int)




### fnX : [RecoveryFn](xref:Microsoft.Quantum.ErrorCorrection.RecoveryFn)




### fnZ : [RecoveryFn](xref:Microsoft.Quantum.ErrorCorrection.RecoveryFn)




### error : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit) 





## Output : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit) 

