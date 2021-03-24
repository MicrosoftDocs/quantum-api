---
uid: Microsoft.Quantum.Tests.QeccTestCase
title: QeccTestCase function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Tests
qsharp.name: QeccTestCase
qsharp.summary: ''
---

# QeccTestCase function

Namespace: [Microsoft.Quantum.Tests](xref:Microsoft.Quantum.Tests)

Package: [Microsoft.Quantum.Standard.Tests](https://nuget.org/packages/Microsoft.Quantum.Standard.Tests)




```qsharp
function QeccTestCase (code : Microsoft.Quantum.ErrorCorrection.QECC, nScratch : Int, fn : Microsoft.Quantum.ErrorCorrection.RecoveryFn, error : (Qubit[] => Unit)) : (Qubit[] => Unit)
```


## Input

### code : [QECC](xref:Microsoft.Quantum.ErrorCorrection.QECC)




### nScratch : [Int](xref:microsoft.quantum.lang-ref.int)




### fn : [RecoveryFn](xref:Microsoft.Quantum.ErrorCorrection.RecoveryFn)




### error : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit) 





## Output : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit) 

