---
uid: Microsoft.Quantum.Logical.Conditioned
title: Conditioned function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Logical
qsharp.name: Conditioned
qsharp.summary: Returns one of two values, depending on the value of a Boolean condition.
---

# Conditioned function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Logical](xref:Microsoft.Quantum.Logical)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns one of two values, depending on the value of a Boolean condition.

```qsharp
function Conditioned<'T> (condition : Bool, ifTrue : 'T, ifFalse : 'T) : 'T
```


## Input

### condition : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

A condition used to control which input is returned.


### ifTrue : 'T

The value to be returned when `condition` is `true`.


### ifFalse : 'T

The value to be returned when `condition` is `false`.



## Output : 'T

`ifTrue` if `condition` is `true`, and `ifFalse` otherwise.

## Type Parameters

### 'T



## Remarks

Unlike the `?|` operator, this function does not short-circuit, such thatboth inputs are fully evaluated.Up to short-circuiting behavior, the following are equivalent:```qsharplet x = condition ? ifTrue | ifFalse;let x = Conditioned(condition, ifTrue, ifFalse);```